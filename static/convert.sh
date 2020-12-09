#!/bin/sh

convert "$1.jpg" -resize 375 "$1-375px.jpg"
convert "$1.jpg" -resize 480 "$1-480px.jpg"
convert "$1.jpg" -resize 768 "$1-768px.jpg"

for i in $(ls $1-*.jpg | sed 's/.jpg//'); do
    cwebp "$i.jpg" -o "$i.webp"
done
