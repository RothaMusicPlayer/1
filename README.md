# Coffee POS Cloud + Super Admin

This project serves the POS at `/` and the separate owner-only Admin Control at `/admin` from one cloud web service. Both clients share one persistent server-side store and live updates.

## Cloud deployment (Render)
1. Push this folder to a private GitHub repository.
2. In Render, create a Blueprint and select the repository (it reads `render.yaml`).
3. Set `ADMIN_PASSWORD` to a long, unique password in the Render environment settings. Do not share it with staff.
4. Keep the persistent disk mounted at `/var/data`; without persistent storage, orders/settings may be lost on redeploy/restart.
5. Deploy. Use the service URL for POS (`https://your-service.onrender.com/`) and Admin (`https://your-service.onrender.com/admin`).

## Local test
- Node.js 18+ recommended.
- `cp .env.example .env`, set `ADMIN_PASSWORD`, then export it in your shell (or use your hosting environment variables).
- `npm start`
- POS: `http://localhost:3000/`
- Admin: `http://localhost:3000/admin`

## Security notes
- Admin settings, reset and admin state endpoints require an authenticated HttpOnly session cookie.
- Admin password is provided through the `ADMIN_PASSWORD` environment variable; no default password is shipped.
- Use HTTPS in production. Keep the repository private and restrict access to deployment environment variables.
- The JSON file store is suitable for a small single-instance shop. For multiple app instances or heavier production usage, migrate to PostgreSQL and shared session storage.
