# Google Integrations TODO

When setting up Google OAuth, connect these features:

## Google Calendar (Two-way sync)
- [ ] JHSC meetings → sync to calendar
- [ ] Inspection schedules → sync to calendar
- [ ] Task due dates → sync to calendar
- [ ] Project milestones → sync to calendar (Phase 6)

## Google Drive (Auto-save)
- [ ] Form submissions → save PDF to Drive
- [ ] Generated documents (internal/external plans) → save to Drive
- [ ] Expense receipts → upload to Drive
- [ ] Project documents → save to Drive

## Setup Required
- Google Cloud Project with Calendar API + Drive API enabled
- OAuth 2.0 credentials (client ID, client secret)
- Redirect URI configured for Vercel domain
- Token storage in Supabase (google_tokens table)
