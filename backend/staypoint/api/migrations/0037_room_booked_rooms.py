# Generated by Django 5.1.5 on 2025-03-29 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0036_remove_room_num_rooms_room_total_rooms'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='booked_rooms',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
