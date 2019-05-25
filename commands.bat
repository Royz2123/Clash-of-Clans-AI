color 0a
git clone https://github.com/ronraisch/Clash-of-Clans-AI.git
cd Clash-of-Clans-AI
For /f %%p IN ('where python') DO set PATH=%PATH%;%%p
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m http.server 8000
python runGenetics.py
