# Generated by Django 5.1.5 on 2025-03-22 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_alter_hotel_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetails',
            name='is_host',
            field=models.BooleanField(default=False),
        ),
    ]
