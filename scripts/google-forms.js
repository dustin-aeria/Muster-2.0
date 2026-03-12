/**
 * Google Forms API Script
 * Creates and manages forms using service account
 *
 * Usage: node scripts/google-forms.js
 */

import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load service account credentials
const CREDENTIALS_PATH = join(__dirname, '..', 'muster-forms-bd04b7762aff.json');
const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf8'));

// Initialize auth
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    'https://www.googleapis.com/auth/forms.body',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
  ],
});

const forms = google.forms({ version: 'v1', auth });
const drive = google.drive({ version: 'v3', auth });

/**
 * Create a new Google Form
 */
async function createForm(title, description = '') {
  try {
    const response = await forms.forms.create({
      requestBody: {
        info: {
          title: title,
          documentTitle: title,
        },
      },
    });

    console.log('Form created:', response.data.formId);
    console.log('Edit URL:', response.data.responderUri.replace('/viewform', '/edit'));
    console.log('Response URL:', response.data.responderUri);

    return response.data;
  } catch (error) {
    console.error('Error creating form:', error.message);
    throw error;
  }
}

/**
 * Add questions to a form
 */
async function addQuestions(formId, questions) {
  const requests = questions.map((q, index) => ({
    createItem: {
      item: {
        title: q.title,
        description: q.description || '',
        questionItem: {
          question: buildQuestion(q),
        },
      },
      location: { index },
    },
  }));

  try {
    const response = await forms.forms.batchUpdate({
      formId,
      requestBody: { requests },
    });
    console.log('Questions added successfully');
    return response.data;
  } catch (error) {
    console.error('Error adding questions:', error.message);
    throw error;
  }
}

/**
 * Build question object based on type
 */
function buildQuestion(q) {
  const base = { required: q.required || false };

  switch (q.type) {
    case 'text':
      return { ...base, textQuestion: { paragraph: false } };

    case 'paragraph':
      return { ...base, textQuestion: { paragraph: true } };

    case 'multipleChoice':
      return {
        ...base,
        choiceQuestion: {
          type: 'RADIO',
          options: q.options.map(o => ({ value: o })),
        },
      };

    case 'checkbox':
      return {
        ...base,
        choiceQuestion: {
          type: 'CHECKBOX',
          options: q.options.map(o => ({ value: o })),
        },
      };

    case 'dropdown':
      return {
        ...base,
        choiceQuestion: {
          type: 'DROP_DOWN',
          options: q.options.map(o => ({ value: o })),
        },
      };

    case 'date':
      return { ...base, dateQuestion: { includeTime: false } };

    case 'time':
      return { ...base, timeQuestion: {} };

    case 'scale':
      return {
        ...base,
        scaleQuestion: {
          low: q.low || 1,
          high: q.high || 5,
          lowLabel: q.lowLabel || '',
          highLabel: q.highLabel || '',
        },
      };

    default:
      return { ...base, textQuestion: { paragraph: false } };
  }
}

/**
 * Move form to a specific Drive folder
 */
async function moveToFolder(fileId, folderId) {
  try {
    const file = await drive.files.get({
      fileId,
      fields: 'parents',
    });

    const previousParents = file.data.parents?.join(',') || '';

    await drive.files.update({
      fileId,
      addParents: folderId,
      removeParents: previousParents,
      fields: 'id, parents',
    });

    console.log('Form moved to folder');
  } catch (error) {
    console.error('Error moving form:', error.message);
    throw error;
  }
}

/**
 * List forms in Drive
 */
async function listForms() {
  try {
    const response = await drive.files.list({
      q: "mimeType='application/vnd.google-apps.form'",
      fields: 'files(id, name, webViewLink)',
      pageSize: 50,
    });

    console.log('\nForms found:');
    if (response.data.files.length === 0) {
      console.log('  No forms found');
    } else {
      response.data.files.forEach(file => {
        console.log(`- ${file.name}: ${file.webViewLink}`);
      });
    }

    return response.data.files;
  } catch (error) {
    console.error('Error listing forms:', error.message);
    throw error;
  }
}

/**
 * Create a sample Avalanche Control Log form
 */
async function createAvalancheControlLog() {
  console.log('\nCreating Avalanche Control Log form...\n');

  const form = await createForm('Avalanche Control Log');

  await addQuestions(form.formId, [
    { title: 'Date', type: 'date', required: true },
    { title: 'Time', type: 'time', required: true },
    { title: 'Location/Zone', type: 'text', required: true },
    { title: 'Operator Name', type: 'text', required: true },
    {
      title: 'Weather Conditions',
      type: 'multipleChoice',
      options: ['Clear', 'Partly Cloudy', 'Overcast', 'Snowing', 'Raining', 'Windy']
    },
    { title: 'Temperature (°C)', type: 'text' },
    { title: 'Wind Speed (km/h)', type: 'text' },
    { title: 'Wind Direction', type: 'dropdown', options: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] },
    { title: 'Snow Depth (cm)', type: 'text' },
    {
      title: 'Avalanche Hazard Rating',
      type: 'multipleChoice',
      required: true,
      options: ['1 - Low', '2 - Moderate', '3 - Considerable', '4 - High', '5 - Extreme']
    },
    {
      title: 'Control Method Used',
      type: 'checkbox',
      options: ['Explosive', 'Ski Cut', 'Cornice Drop', 'Hand Charge', 'Helicopter Delivery', 'None Required']
    },
    { title: 'Number of Charges Used', type: 'text' },
    {
      title: 'Results',
      type: 'multipleChoice',
      options: ['No Release', 'Minor Release', 'Moderate Release', 'Major Release']
    },
    { title: 'Observations/Notes', type: 'paragraph' },
    {
      title: 'Area Status After Control',
      type: 'multipleChoice',
      required: true,
      options: ['Open - Safe', 'Open - Monitor', 'Closed - Further Control Needed', 'Closed - Natural Hazard']
    },
    { title: 'Supervisor Notified', type: 'multipleChoice', options: ['Yes', 'No', 'N/A'] },
    { title: 'Digital Signature (Type Full Name)', type: 'text', required: true },
  ]);

  console.log('\n✅ Avalanche Control Log form created successfully!');
  console.log(`\n📝 Fill out form: ${form.responderUri}`);
  console.log(`\n⚙️  Edit form: ${form.responderUri.replace('/viewform', '/edit')}`);

  return form;
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'list':
      await listForms();
      break;

    case 'create-avalanche':
      await createAvalancheControlLog();
      break;

    case 'create':
      const title = args[1] || 'New Form';
      await createForm(title);
      break;

    default:
      console.log('Google Forms Manager');
      console.log('====================');
      console.log('');
      console.log('Commands:');
      console.log('  node scripts/google-forms.js list              - List all forms');
      console.log('  node scripts/google-forms.js create "Title"    - Create empty form');
      console.log('  node scripts/google-forms.js create-avalanche  - Create Avalanche Control Log');
      console.log('');
  }
}

main().catch(console.error);
