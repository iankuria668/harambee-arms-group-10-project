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
        
        
        firearm_1 = Item(title="Glock 19", description="A compact and reliable 9mm handgun.", category="firearm", price=500, img_url='https://i.pinimg.com/474x/0a/85/31/0a8531f16e7b63fbf3577cb66ff304b7.jpg')
        firearm_2 = Item(title="Remington 870", description="A versatile and dependable shotgun.", category="firearm", price=400, img_url='https://i.pinimg.com/564x/41/f4/aa/41f4aa962b65362d91f846e75deed656.jpg')
        firearm_3 = Item(title="AR-15", description="A lightweight, 5.56 NATO, semi-automatic rifle.", category="firearm", price=900, img_url='https://i.pinimg.com/474x/13/66/03/136603535d4a8edd5cc1fc9607fc6ed1.jpg')
        firearm_4 = Item(title="Mossberg 500", description="A popular pump-action shotgun.", category="firearm", price=350, img_url='https://i.pinimg.com/474x/09/35/a5/0935a533b0ec2d874e09f7b805b18ac8.jpg')                
        firearm_5 = Item(title="Smith & Wesson M&P Shield", description="A compact, slim 9mm handgun.", category="firearm", price=450, img_url='https://i.pinimg.com/474x/5d/24/2e/5d242e9885235f4f5079bac839328a2f.jpg')
        firearm_6 = Item(title="Sig Sauer P320", description="A striker-fired modular handgun.", category="firearm", price=550, img_url='https://i.pinimg.com/564x/6d/e9/54/6de95402aaf9e2a560882621c3a89189.jpg')
        firearm_7 = Item(title="Beretta 92FS", description="A reliable 9mm pistol with a classic design.", category="firearm", price=600, img_url='https://i.pinimg.com/474x/9c/6b/30/9c6b30fd2554a116604eec566afffe6b.jpg')
        firearm_8 = Item(title="Springfield XD", description="A durableand ergonomic 9mm handgun.", category="firearm", price=500, img_url='https://i.pinimg.com/474x/1f/80/14/1f80149631102d07c642d171014a5689.jpg')
        firearm_9 = Item(title="Ruger 10/22", description="A popular .22 LR semi-automatic rifle.", category="firearm", price=300, img_url='https://i.pinimg.com/474x/b3/b6/42/b3b6422c77b40db2a45241840143049d.jpg')
        firearm_10 = Item(title="HK VP9", description="A well-engineered striker-fired 9mm pistol.", category="firearm", price=700, img_url='https://i.pinimg.com/474x/c4/87/77/c48777e652471ab4d17c4fb305ad1100.jpg')

        accessory_1 = Item(title="Red Dot Sight", description="Enhances target acquisition with a red dot reticle.", category="accessory", price=150, img_url='https://example.com/images/reddot.jpg')
        accessory_2 = Item(title="Gun Cleaning Kit", description="Essential tools for firearm maintenance.", category="accessory", price=25, img_url='https://example.com/images/cleaningkit.jpg')
        accessory_3 = Item(title="Tactical Flashlight", description="A high-lumen flashlight for tactical use.", category="accessory", price=75, img_url='https://example.com/images/flashlight.jpg')
        accessory_4 = Item(title="Suppressor", description="Reduces noise and muzzle flash.", category="accessory", price=800, img_url='https://example.com/images/suppressor.jpg')
        accessory_5 = Item(title="Holster", description="Comfortable and secure holster for concealed carry.", category="accessory", price=50, img_url='https://example.com/images/holster.jpg')
        accessory_6 = Item(title="Laser Sight", description="A laser sight for improved accuracy.", category="accessory", price=120, img_url='https://example.com/images/lasersight.jpg')
        accessory_7 = Item(title="Range Bag", description="A durable bag for carrying shooting gear.", category="accessory", price=60, img_url='https://example.com/images/rangebag.jpg')
        accessory_8 = Item(title="Sling", description="A comfortable sling for carrying rifles.", category="accessory", price=40, img_url='https://example.com/images/sling.jpg')
        accessory_9 = Item(title="Magpul PMAG", description="A durable polymer magazine for AR-15.", category="accessory", price=15, img_url='https://example.com/images/pmag.jpg')
        accessory_10 = Item(title="Ear Protection", description="Protects hearing during shooting.", category="accessory", price=30, img_url='https://example.com/images/earprotection.jpg')

        ammo_1 = Item(title="9mm FMJ", description="Full metal jacket 9mm rounds, box of 50.", category="ammunition", price=20, img_url='https://example.com/images/9mm.jpg')
        ammo_2 = Item(title="5.56 NATO", description="Standard 5.56 NATO rounds, box of 20.", category="ammunition", price=15, img_url='https://example.com/images/556.jpg')
        ammo_3 = Item(title="12 Gauge Buckshot", description="12 gauge buckshot shells, box of 25.", category="ammunition", price=30, img_url='https://example.com/images/12gauge.jpg')
        ammo_4 = Item(title="45 ACP", description="45 ACP rounds, box of 50.", category="ammunition", price=25, img_url='https://example.com/images/45acp.jpg')
        ammo_5 = Item(title="22 LR", description="22 LR rounds, box of 100.", category="ammunition", price=10, img_url='https://example.com/images/22lr.jpg')
        ammo_6 = Item(title="7.62x39mm", description="7.62x39mm rounds, box of 20.", category="ammunition", price=20, img_url='https://example.com/images/762x39.jpg')
        ammo_7 = Item(title="300 Blackout", description="300 Blackout rounds, box of 20.", category="ammunition", price=25, img_url='https://example.com/images/300blackout.jpg')
        ammo_8 = Item(title="40 S&W", description="40 S&W rounds, box of 50.", category="ammunition", price=30, img_url='https://example.com/images/40sw.jpg')
        ammo_9 = Item(title="6.5 Creedmoor", description="6.5 Creedmoor rounds, box of 20.", category="ammunition", price=35, img_url='https://example.com/images/65creedmoor.jpg')
        ammo_10 = Item(title="10mm Auto", description="10mm Auto rounds, box of 50.", category="ammunition", price=40, img_url='https://example.com/images/10mm.jpg')

        print('Committing Item data')
        items = [
            firearm_1, firearm_2, firearm_3, firearm_4, firearm_5, firearm_6, firearm_7, firearm_8, firearm_9, firearm_10,
            accessory_1, accessory_2, accessory_3, accessory_4, accessory_5, accessory_6, accessory_7, accessory_8, accessory_9, accessory_10,
            ammo_1, ammo_2, ammo_3, ammo_4, ammo_5, ammo_6, ammo_7, ammo_8, ammo_9, ammo_10
        ]

        
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
