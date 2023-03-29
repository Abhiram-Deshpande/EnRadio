from django.shortcuts import render
from pymongo import MongoClient


# Create your views here.

def save_data(request):
    client = MongoClient(request)
    db = client['mydatabase']
    collection = db['my_collection']
    document = collection.find()
    return render(request, 'my_template.html', context={'document': document})
