# virtuallab-robics (KitBench)

A browser-based virtual robotics lab for schools. Pick parts from a real kit, wire them, redesign the robot, program it, then test it on 2D and 3D mats. No install and no server needed for the online version.

**Live version: [https://mwenda25.github.io/virtuallab-robics/](https://mwenda25.github.io/virtuallab-robics/)** (opens in your browser)

## What it does

1. **Build the kit.** Choose an ESP32 starter kit, a LEGO EV3 set or a LEGO SPIKE Prime set. Checks flag missing or incompatible parts.
2. **Design robot.** Change the colour, wheels, track width and frame length of the 3D robot, add a bumper or name plate, and check size and weight against RoboMission or RoboSports limits. A parts list shows what is in the kit, what is short and what is an add-on.
3. **Wire it.** Pin-to-pin wiring for the ESP32, port selection for EV3 and SPIKE.
4. **Program.** Drag-and-drop blocks (SPIKE style) that translate live into Python and JavaScript. Write Python or JavaScript directly. Run on the 2D test mat or the 3D mission mat.
5. **Simulator.** One tab with two views. The 2D practice track has a line track, sumo ring, RoboMission mat and a RoboSports pitch with a ball and ball camera. The 3D mission mat has a cube pick-up task, and your program can be the mission. The Project lab is a free 3D bench for Future Innovators ideas: pick a controller (ESP32, Arduino Uno, Raspberry Pi Pico, EV3 or SPIKE), add sensors and motors, wire them to pins in 3D, move the sensor sliders and write IF/THEN rules to see the outputs react. It checks wiring (pin types, 3.3 V versus 5 V parts) and can add the build to your project notes.
6. **Projects.** Workspaces for WRO Future Innovators and RoboSports projects, with a test log, self-assessment, checklist and text export.

## Run it

**Online:** open `index.html` in a browser, or publish the repository with GitHub Pages (Settings, Pages, deploy from `main`, root). Blockly, three.js and Pyodide load from a CDN, so an internet connection is needed.

**Offline (Windows):** open the `offline` folder and double-click `Start KitBench.bat`. Everything, including the libraries, is in `offline/libs`. See `offline/README.txt`.

Your kit, wiring, designs, projects and blocks are saved in the browser (localStorage), separately for each browser.

## Notes

- Part lists come from the ESP32 Basic Starter Kit packing list, the LEGO EV3 element list and the LEGO SPIKE Prime element overview. The ESP32 starter kit has no motors, wheels or chassis, so those appear as add-ons.
- WRO details (age groups, RoboSports limits, judging rubrics) follow recent public rules and change each season. Always check the official WRO rulebook.
- Part weights and prices are estimates.

## Third-party software

The offline folder bundles [Blockly](https://github.com/google/blockly) 10.4.3 (Apache-2.0), [three.js](https://github.com/mrdoob/three.js) 0.160.0 (MIT) and [Pyodide](https://github.com/pyodide/pyodide) 0.26.4 (MPL-2.0).

LEGO, MINDSTORMS, SPIKE and WRO are trademarks of their respective owners. This project is not affiliated with or endorsed by them.
