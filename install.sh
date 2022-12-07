python3 -m pip install -r requirements.txt
source proyecto_final-venv/bin/activate
(trap 'kill 0' SIGINT; ./runBackend.sh & ./hackernews.sh & ./runFrontend.sh)
killall -9 python3

