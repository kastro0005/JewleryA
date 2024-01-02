#!/bin/bash

#Exit on error
set -o errexit

pip install -r Requirements.txt

python manage.py collectstatic --no-input

python manage.py makemigrations

python manage.py migrate


