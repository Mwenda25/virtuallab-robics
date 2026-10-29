# Security

## How BotLabs Studio Ke is built

- A static website. There is no server code, database or user data on a server.
- The page loads code only from its own address. A Content Security Policy in the page blocks scripts and network requests to other websites.
- Third-party libraries (Blockly, three.js and Pyodide) are copied into `offline/libs`, so a change at an outside site cannot change what runs here.
- Learner data stays in each browser. See [PRIVACY.md](PRIVACY.md).

## Keeping the site safe (for the owner)

- Turn on two-step login (2FA) for the GitHub account that owns this repository.
- Give other teachers access as collaborators, never by sharing the password.
- In the repository settings, turn on Dependabot alerts and secret scanning.
- Check the Blockly, three.js and Pyodide release notes now and then for security fixes, then update the files in `offline/libs`.

## Known limits

- The PIN on a learner profile is a simple lock, not strong security.
- The CSP allows inline scripts and `eval`, because the app runs learners' own JavaScript and Python programs in the simulator. It still blocks anything loaded from other websites.

## Reporting a problem

Please do not post a security problem in a public issue. Use the **Security** tab of this repository and choose **Report a vulnerability** to send a private report to the owner.
