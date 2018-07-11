import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import User


def list_users(request):
    result = User.objects.all().values()
    return JsonResponse({'data': list(result)})


def list_users_group(request):
    result = User.objects.order_by('group').values()
    return JsonResponse({'data': list(result)})


def sorted(request):
    result = User.objects.order_by('first_name', 'last_name').values()
    return JsonResponse({'data': list(result)})


def sorted_reverse(request):
    result = User.objects.order_by('-first_name', '-last_name').values()
    return JsonResponse({'data': list(result)})


@csrf_exempt
def add(request):
    data_unicode = request.body.decode('utf-8')
    data = json.loads(data_unicode)

    User.objects.create(first_name=data['firstName'],
                                   last_name=data['lastName'], group=data['group'])

    result = User.objects.all().values()
    return JsonResponse({'data': list(result)})