#!/bin/bash

while read -r var;
do
	echo $var
	cp ../scratch-blocks-develop/media/$var .
done < ./toconvert.txt

for file in ./*.svg;
do
	inkscape -z -e  ${file%.*}.png -w 1024 $file
done
rm *.svg
