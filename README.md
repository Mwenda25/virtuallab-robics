# virtuallab-robics (BotLabs Studio Ke)

A browser-based virtual robotics lab for schools. Pick parts from a real kit, wire them, redesign the robot, program it, then test it on 2D and 3D mats. No install and no server needed for the online version.

**Live version: [https://mwenda25.github.io/virtuallab-robics/](https://mwenda25.github.io/virtuallab-robics/)** (opens in your browser)

**Safe by design:** no server, no tracking, and the page loads code only from itself. See [PRIVACY.md](PRIVACY.md) and [SECURITY.md](SECURITY.md).

## For schools

- **Three levels:** Explorer (ages 6 to 8), Builder (9 to 12) and Engineer (13 to 17). The level changes which tabs, blocks and tools learners see.
- **Missions:** 11 short missions with hints, up to 3 stars each, and a celebration from the robot helper Bolt.
- **Phones and laptops:** a bottom tab bar and a small robot view on phones. It installs on Android, iPhone, iPad and laptops and then works offline.
- **Learner logins:** each learner makes a profile with a name and a 4-digit PIN. Stars and blocks are saved per learner on the device, so shared phones and laptops work and everything stays offline. There is also a Play without a login option. The PIN keeps classmates from changing each other's stars; it is not strong security. No learner data leaves the device.
- **Teacher panel:** choose **Teacher** on the login screen (make a teacher PIN the first time) to reset PINs, delete learners, download the class list as CSV, and download or restore a backup file to move learners to another device. The class score sheet can fill in names and stars from the learners on the device.
- **Robot Dog challenge (Builder and Engineer):** a four-legged robot in the Simulator (**Robot Dog (3D)**). Joint sliders with set limits, a foot target that uses inverse kinematics, a centre-of-mass dot and support area (the dog tips over when the weight leaves it), a walking gait, dog blocks that turn into Python, JavaScript and real ESP32 MicroPython, a simple **Train it** evolution game with reward sliders, a real-world calibration challenge, a 5-day journal in the Projects tab, a share link, a video clip recorder and an on-screen phone-style remote. The Design tab has a balance check for the wheeled robot too. Servo parts for the dog are in the Build tab.
- **Teacher pack:** on the Missions page choose **Teacher pack** for a teacher guide, one printable lesson plan per mission with answers and check questions, a certificate, and a blank class score sheet. Use Print and choose Save as PDF to keep copies.

## What it does

1. **Build the kit.** Choose an ESP32 starter kit, a LEGO EV3 set or a LEGO SPIKE Prime set. Checks flag missing or incompatible parts.
2. **Design robot.** Change the colour, wheels, track width and frame length of the 3D robot, add a bumper or name plate, and check size and weight against RoboMission or RoboSports limits. A parts list shows what is in the kit, what is short and what is an add-on.
3. **Wire it.** Pin-to-pin wiring for the ESP32, port selection for EV3 and SPIKE.
4. **Program.** Drag-and-drop blocks (SPIKE style) that translate live into Python and JavaScript. Write Python or JavaScript directly. Run on the 2D test mat or the 3D mission mat.
5. **Simulator.** One tab with two views. The 2D practice track has a line track, sumo ring, RoboMission mat and a RoboSports pitch with a ball and ball camera. The 3D mission mat has a cube pick-up task, and your program can be the mission. The Project lab is a free 3D bench for Future Innovators ideas: pick a controller (ESP32, Arduino Uno, Raspberry Pi Pico, EV3 or SPIKE), add sensors and motors, wire them to pins in 3D, move the sensor sliders and write IF/THEN rules to see the outputs react. It checks wiring (pin types, 3.3 V versus 5 V parts) and can add the build to your project notes.
6. **Projects.** Workspaces for WRO Future Innovators and RoboSports projects, with a test log, self-assessment, checklist and text export.

## Run it

**As a web app (online and offline, Android, iPhone, iPad, Windows, Mac, Chromebook):** open the live link above once with an internet connection. BotLabs Studio Ke saves itself on the device (a service worker keeps the app, Blockly, three.js and Python) and then opens with no internet. It needs HTTPS, which GitHub Pages provides (Settings, Pages, deploy from `main`, root).

- **Android (Chrome):** tap Install app when BotLabs Studio Ke offers it, or the browser menu, then Install app.
- **iPhone and iPad (Safari):** tap the Share button, then Add to Home Screen.
- **Windows, Mac, Chromebook (Chrome or Edge):** click the install icon in the address bar.

BotLabs Studio Ke saves Python (about 15 MB) in the background on Wi-Fi so that Python code runs offline too. On mobile data it asks first. After an update is published, open the app once while online to get the new version.

**Windows, no internet even the first time:** open the `offline` folder and double-click `Start BotLabs Studio Ke.bat`. Everything, including the libraries, is in `offline/libs`, and it runs from a small local server. See `offline/README.txt`.

Your kit, wiring, designs, projects and blocks are saved in the browser (localStorage), separately for each browser.

## Notes

- Part lists come from the ESP32 Basic Starter Kit packing list, the LEGO EV3 element list and the LEGO SPIKE Prime element overview. The ESP32 starter kit has no motors, wheels or chassis, so those appear as add-ons.
- WRO details (age groups, RoboSports limits, judging rubrics) follow recent public rules and change each season. Always check the official WRO rulebook.
- Part weights and prices are estimates.

## Third-party software

The offline folder bundles [Blockly](https://github.com/google/blockly) 10.4.3 (Apache-2.0), [three.js](https://github.com/mrdoob/three.js) 0.160.0 (MIT) and [Pyodide](https://github.com/pyodide/pyodide) 0.26.4 (MPL-2.0).

LEGO, MINDSTORMS, SPIKE and WRO are trademarks of their respective owners. This project is not affiliated with or endorsed by them.
