from django.contrib import admin
from django.urls import path,include ,re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", TemplateView.as_view(template_name="base.html")),
    path('recipes/',include("api_recipes.urls")),
    path('shop-product/',include("shop.urls")),
    path('blogs/',include("blogs.urls")),
    path('team/',include("team.urls")),
    re_path(r'^(?P<path>.*)/$', TemplateView.as_view(template_name='base.html')),
    path('accounts/', include("accounts.urls")),
]
if settings.DEBUG:
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)