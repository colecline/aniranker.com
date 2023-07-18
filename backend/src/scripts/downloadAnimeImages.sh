mkdir images
cd images
mkdir anime
mv ../../../images_anime.txt anime/images_anime.txt
cd anime
wget -i images_anime.txt
