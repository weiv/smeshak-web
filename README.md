# SMESHAK

Interactive 3D viewer for fractal meshes. Drag to rotate, scroll to zoom, tap/click to cycle through models.

---

## Running locally on Windows

### Step 1 — Download the files

1. Click the green **Code** button on this page → **Download ZIP**
2. Right-click the downloaded ZIP → **Extract All…** → click **Extract**
3. You'll have a folder called `smeshak-web-main` (or similar). Remember where it is.

> **Important:** You can't just double-click `index.html` — the 3D models won't load unless it's served through a local web server (one of the two options below).

---

### Step 2 — Start a local web server

#### Option A — Python *(easiest if you have it)*

**Check if you have Python:** Press `Windows + R`, type `cmd`, hit Enter, then type `python --version` and hit Enter.
If you see something like `Python 3.x.x`, you're good. If not, skip to Option B.

1. In the same Command Prompt window, type (adjust the path if you extracted elsewhere):
   ```
   cd Downloads\smeshak-web-main
   ```
2. Then type:
   ```
   python -m http.server 8000
   ```
3. You'll see `Serving HTTP on 0.0.0.0 port 8000 ...` — the server is running.
4. Open your browser and go to **http://localhost:8000**

To stop the server, go back to the Command Prompt and press `Ctrl + C`.

---

#### Option B — VS Code + Live Server

1. Install **Visual Studio Code** from [code.visualstudio.com](https://code.visualstudio.com) (free)
2. Open VS Code → click the **Extensions** icon in the left sidebar (four squares) → search **Live Server** → **Install**
3. Go to **File → Open Folder…** and select the `smeshak-web-main` folder
4. Click on **index.html** in the file list
5. Click **Go Live** in the bottom-right corner of VS Code — your browser will open automatically

---

### Controls

| Action | Effect |
|--------|--------|
| Drag | Rotate |
| Scroll | Zoom in / out |
| Tap or click | Cycle to next model |

The first load of each model takes a moment (files range from 200 KB to 6 MB). After that, switching is instant.
