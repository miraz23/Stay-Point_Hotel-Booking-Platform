# Generated by Django 5.1.5 on 2025-03-17 09:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_rename_userprofile_userdetails'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserDetails',
        ),
    ]
