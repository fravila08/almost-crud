"""
urls.py for controversial foods
"""
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from django.core import serializers
from .models import *
from rest_framework.response import Response


# Create your views here.
def index(request):
    """
    homepage
    """
    # print('index')
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)

#
# API ROUTES
#
@api_view(["POST"])
def signIn(request):
    # print(request.data)
    email=request.data["email"]
    password=request.data["password"]
    print(email, password)
    user = authenticate(username= email, password = password)
    print(user)
    if user is not None and user.is_active:
        try:
            login(request._request, user)
            return JsonResponse({'signIn':True})
        except Exception as e:
            print(e)
            return JsonResponse({'signIn':False})
    else:
        return JsonResponse({'signIn':False})
    # else:
    #         return JsonResponse({'signIn':False})
    
@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        data=serializers.serialize("json", [request.user], fields=['email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({"user":None})
        
        
    

@api_view(["POST"])
def signUp(request):
    # print(request.data)
    email=request.data["email"]
    password=request.data["password"]
    print(email, password)
    try:
        AppUser.objects.create_user(username=email, email=email, password=password)
        return JsonResponse({'signup':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signup':False})

def signOut(request):
    try:
        logout(request)
        return JsonResponse({'signout':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signout':False})
    
@api_view(["PUT", "GET"])
def new_example(request):
    if request.method=='PUT':
        try:
            title=request.data['title']
            content= request.data['content']
            example=Example.objects.create(user=request.user, content=content, title=title)
            example.save()
            return Response({"newUser":True})
        except Exception as e:
            print(e)
            return Response({"newUser":False})
    if request.method=='GET':
        try:
            myExamples=Example.objects.all().values()
            return Response({'examples': myExamples})
        except Exception as e:
            print(e)
            return Response({"failure": True})
        
@api_view(["GET"])
def single_example(request, id):
    incoming_id=id
    example=Example.objects.filter(id=incoming_id).values()

    return Response({'example': example[0]})