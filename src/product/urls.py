from django.urls import path
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt

from product.views.product import *
from product.views.variant import VariantView, VariantCreateView, VariantEditView

app_name = "product"

urlpatterns = [
    # Variants URLs
    path('variants/', VariantView.as_view(), name='variants'),
    path('variant/create', VariantCreateView.as_view(), name='create.variant'),
    path('variant/<int:id>/edit/', VariantEditView.as_view(), name='update.variant'),

    # Products URLs
    path('create/', csrf_exempt(CreateProductView.as_view()), name='create.product'),
    path('<int:pk>/', get_product, name='get.product'),
    path('<int:pk>/edit/', csrf_exempt(UpdateProductView.as_view()), name='edit.product'),
    # path('list/', TemplateView.as_view(template_name='products/list.html', extra_context={
    #     'product': True
    # }), name='list.product'),
    path('list/', ProductListView.as_view(), name='list.product'),

]
