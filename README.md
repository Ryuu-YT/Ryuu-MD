
apt update && apt upgrade -y
apt install -y  imagemagick  nodejs webp ffmpeg
npm install yarn
cd /sdcard/beebot
yarn
node .