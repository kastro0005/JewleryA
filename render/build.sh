#!/bin/bash

#Exit on error
set -o errexit

pip install -r Requirements.txt

python manage.py migrate


python manage.py collectstatic --no-input



