#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Item, Customer, Order, OrderItem

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():

        Item.query.delete()
        Customer.query.delete()
        Order.query.delete()
        OrderItem.query.delete()

        print("Starting seed...")

        # Firearms
        firearm_1 = Item(title = "Glock 19", description="A compact and reliable 9mm handgun.", category="firearm", price=500, img_url='https://example.com/images/glock19.jpg')
        firearm_2 = Item(title = "Remington 870", description="A versatile and dependable shotgun.", category="firearm", price=400, img_url='https://example.com/images/remington870.jpg')
        firearm_3 = Item(title = "AR-15", description="A lightweight, 5.56 NATO, semi-automatic rifle.", category="firearm", price=900, img_url='https://example.com/images/ar15.jpg')
        firearm_4 = Item(title = "Mossberg 500", description="A popular pump-action shotgun.", category="firearm", price=350, img_url='https://example.com/images/mossberg500.jpg')
        firearm_5 = Item(title = "Smith & Wesson M&P Shield", description="A compact, slim 9mm handgun.", category="firearm", price=450, img_url='https://example.com/images/swmp.jpg')

        # Accessories
        accessory_1 = Item(title = "Red Dot Sight", description="Enhances target acquisition with a red dot reticle.", category="accessory", price=150, img_url='https://example.com/images/reddot.jpg')
        accessory_2 = Item(title = "Gun Cleaning Kit", description="Essential tools for firearm maintenance.", category="accessory", price=25, img_url='https://example.com/images/cleaningkit.jpg')
        accessory_3 = Item(title = "Tactical Flashlight", description="A high-lumen flashlight for tactical use.", category="accessory", price=75, img_url='https://example.com/images/flashlight.jpg')
        accessory_4 = Item(title = "Suppressor", description="Reduces noise and muzzle flash.", category="accessory", price=800, img_url='https://example.com/images/suppressor.jpg')
        accessory_5 = Item(title = "Holster", description="Comfortable and secure holster for concealed carry.", category="accessory", price=50, img_url='https://example.com/images/holster.jpg')

        # Ammunition
        ammo_1 = Item(title = "9mm FMJ", description="Full metal jacket 9mm rounds, box of 50.", category="ammunition", price=20, img_url='https://example.com/images/9mm.jpg')
        ammo_2 = Item(title = "5.56 NATO", description="Standard 5.56 NATO rounds, box of 20.", category="ammunition", price=15, img_url='https://example.com/images/556.jpg')
        ammo_3 = Item(title = "12 Gauge Buckshot", description="12 gauge buckshot shells, box of 25.", category="ammunition", price=30, img_url='https://example.com/images/12gauge.jpg')
        ammo_4 = Item(title = "45 ACP", description="45 ACP rounds, box of 50.", category="ammunition", price=25, img_url='https://example.com/images/45acp.jpg')
        ammo_5 = Item(title = "22 LR", description="22 LR rounds, box of 100.", category="ammunition", price=10, img_url='https://example.com/images/22lr.jpg')

        print('Committing Item data')
        items = [firearm_1, firearm_2, firearm_3, firearm_4, firearm_5, accessory_1, accessory_2, accessory_3, accessory_4, accessory_5, ammo_1, ammo_2, ammo_3, ammo_4, ammo_5]

        for item in items:
            db.session.add(item)

        db.session.commit()

        print('Seeding customer data')
        customer_1 = Customer(name = 'John Doe', username = 'johndoe', wallet = 1000.00, admin = True)
        customer_1.password_hash = 'password1234'
        customer_2 = Customer(name = 'Jane Smith', username= 'janesmith', wallet = 1500.00, admin = True)
        customer_2.password_hash = 'password5678'
        customer_3 = Customer(name = 'Jim Bean', username = 'jimbean', wallet = 500.00, admin = False)
        customer_3.password_hash = 'password10'
        customer_4 = Customer(name = 'Sara Conner', username = 'saraconner', wallet = 2000.00, admin = False)
        customer_4.password_hash = 'password123'

        print('Seeding orderitem data')
        order_item_1 = OrderItem(quantity = 1, order_id = 1, item_id = 1)
        order_item_2 = OrderItem(quantity = 2, order_id = 1, item_id = 6)
        order_item_3  = OrderItem(quantity = 1, order_id = 1, item_id = 11)

        print('Seeding order data')
        order_1  = Order(customer_id = 1, total = 700.00 )

        print('Committing customer seed')
        db.session.add_all([customer_1, customer_2, customer_3, customer_4])
        db.session.commit()

        print('Committing orderitem seeds')
        db.session.add_all([order_item_1, order_item_2, order_item_3])
        db.session.commit()

        print('Committing order seed')
        db.session.add_all([order_1])
        db.session.commit()
