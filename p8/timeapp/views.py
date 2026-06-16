from django.http import HttpResponse
from datetime import datetime

# View that returns current server date and time
def current_datetime(request):
    now = datetime.now()
    html = f"<h1>Current Date and Time (Server): {now}</h1>"
    return HttpResponse(html)
