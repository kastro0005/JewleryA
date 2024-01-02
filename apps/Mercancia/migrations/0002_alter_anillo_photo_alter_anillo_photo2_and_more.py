# Generated by Django 4.2.6 on 2023-11-16 16:56

import apps.Mercancia.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mercancia', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='anillo',
            name='photo',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.anillo_photo_directory),
        ),
        migrations.AlterField(
            model_name='anillo',
            name='photo2',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.anillo_photo_directory),
        ),
        migrations.AlterField(
            model_name='anillo',
            name='photo3',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.anillo_photo_directory),
        ),
        migrations.AlterField(
            model_name='arete',
            name='photo',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.arete_photo_directory),
        ),
        migrations.AlterField(
            model_name='arete',
            name='photo2',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.arete_photo_directory),
        ),
        migrations.AlterField(
            model_name='arete',
            name='photo3',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.arete_photo_directory),
        ),
        migrations.AlterField(
            model_name='brazalete',
            name='photo',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.brazalete_photo_directory),
        ),
        migrations.AlterField(
            model_name='brazalete',
            name='photo2',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.brazalete_photo_directory),
        ),
        migrations.AlterField(
            model_name='brazalete',
            name='photo3',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.brazalete_photo_directory),
        ),
        migrations.AlterField(
            model_name='cadena',
            name='photo',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.cadena_photo_directory),
        ),
        migrations.AlterField(
            model_name='cadena',
            name='photo2',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.cadena_photo_directory),
        ),
        migrations.AlterField(
            model_name='cadena',
            name='photo3',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.cadena_photo_directory),
        ),
        migrations.AlterField(
            model_name='dije',
            name='photo',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.dije_photo_directory),
        ),
        migrations.AlterField(
            model_name='dije',
            name='photo2',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.dije_photo_directory),
        ),
        migrations.AlterField(
            model_name='dije',
            name='photo3',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.dije_photo_directory),
        ),
        migrations.AlterField(
            model_name='pircing',
            name='photo',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.pircing_photo_directory),
        ),
        migrations.AlterField(
            model_name='pircing',
            name='photo2',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.pircing_photo_directory),
        ),
        migrations.AlterField(
            model_name='pircing',
            name='photo3',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.pircing_photo_directory),
        ),
        migrations.AlterField(
            model_name='tobillera',
            name='photo',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.tobillera_photo_directory),
        ),
        migrations.AlterField(
            model_name='tobillera',
            name='photo2',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.tobillera_photo_directory),
        ),
        migrations.AlterField(
            model_name='tobillera',
            name='photo3',
            field=models.ImageField(default='imgExample.jpg', upload_to=apps.Mercancia.models.tobillera_photo_directory),
        ),
    ]
