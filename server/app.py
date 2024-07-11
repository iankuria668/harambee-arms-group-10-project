#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api

# Add your model imports
from models import Customer, Item, Order, OrderItem

# Views go here!

class Home(Resource):
    def get(self):
        return '<h1> Phase 4 Project Server </h1>'
    
class Items(Resource):
    def get(self):
        items = [item.to_dict(rules= ('-order_items', )) for item in Item.query.all()]
        return make_response(items, 200)
    
    def post(self):
        data = request.get_json()

        new_item = Item (
            title = data['title'],
            img_url = data['img_url'],
            description = data['description'],
            category = data['category'],
            price = data['price']

        )

        db.session.add(new_item)
        db.session.commit()

        return make_response(new_item.to_dict(), 201)

class ItemsByCategory(Resource):
    def get(self, category):
        category_items= [item.to_dict() for item in Item.query.filter(Item.category == category)]
        return (category_items, 200)


class ItemsByID(Resource):
    def get(self, id):
        item = Item.query.get(id)
        if item is None:
            return make_response({'error': 'Item not found'}, 404)
        return make_response(item.to_dict(rules= ('-order_items', )), 200)
    
    def patch(self, id):
        item_to_update = Item.query.filter(Item.id == id).first()

        if item_to_update is None:
            return make_response({'error': 'Item not found'}, 404)

        else: 
            # data = request.get_json()
            for key in request.json:
                setattr(item_to_update, key, request.json[key])

            db.session.add(item_to_update)
            db.session.commit()

            return make_response(item_to_update.to_dict(), 202)
    
    def delete(self, id):
        item_to_delete = Item.query.filter(Item.id == id).first()
        if item_to_delete:
            db.session.delete(item_to_delete)
            db.session.commit()

            return make_response({'message': 'Item deleted'},200)
        else:
            return {'error': 'Item not found'}, 404
        
class Orders(Resource):
    def get(self):
        orders = [order.to_dict() for order in Order.query.all()]
        return make_response(orders, 200)
    
    def post(self):
        data = request.get_json()

        new_order = Order(
            customer_id = data['customer_id'],
            total = data['total']
        )
        db.session.add(new_order)
        db.session.commit()

        return make_response(new_order.to_dict(), 201)
    
class OrdersByID(Resource):    
    def delete(self, id):
        order_to_delete = Order.query.filter(Order.id == id).first()
        if order_to_delete:
            db.session.delete(order_to_delete)
            db.session.commit()
            return make_response({'message': 'Order deleted'},200)
        else:
            return {'error': 'Order not found'}, 404

        
    
api.add_resource(Home, '/')
api.add_resource(Items, '/items')
api.add_resource(ItemsByCategory, '/items/<category>')
api.add_resource(ItemsByID, '/items/<int:id>')
api.add_resource(Orders, '/orders')
api.add_resource(OrdersByID, '/orders/<int:id>')
if __name__ == '__main__':
    app.run(port=5555, debug=True)

