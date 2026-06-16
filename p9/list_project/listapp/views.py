from django.shortcuts import render

# Create your views here.

def display_lists(request):
    fruits = ["Apple", "Banana", "Mango", "Orange"]

    students = [
        "Rahul",
        "Anita",
        "Kiran",
        "Sneha"
    ]

    return render(
        request,
        "listapp/index.html",
        {
            "fruits": fruits,
            "students": students
        }
    )