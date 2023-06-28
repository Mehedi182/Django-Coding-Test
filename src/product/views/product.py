from ..models import *
from django.views import generic
from django.middleware.csrf import get_token
from django.http import JsonResponse, HttpResponse
import json
import datetime
from django.db.models import Q
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

class CreateProductView(generic.TemplateView):
    template_name = 'products/create.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        variants = Variant.objects.filter(active=True).values('id', 'title')
        context['product'] = True
        context['variants'] = list(variants.all())
        context['csrf_token'] = get_token(self.request)
        return context

    def post(self, request, *args, **kwargs):
        # Retrieve the request body data
        body_data = request.body.decode('utf-8')

        # Parse the JSON data into a Python object
        form_data = json.loads(body_data)

        # Access the form data as an object
        product_name = form_data['title']
        product_sku = form_data['sku']
        description = form_data['description']
        product_image = form_data['product_image']
        product_variant = form_data['product_variant']
        product_variant_prices = form_data['product_variant_prices']

        product_table_data = {
            'title' : product_name,
            'description' : description,
            'sku': product_sku
        }
        product = Product(**product_table_data)
        product.save()
        # product = product.id

        product_variant_one_list = []
        product_variant_two_list = []
        product_variant_three_list = []

        for variant_data in product_variant:
            variant_option = variant_data['option']
            variant_tags = variant_data['tags']
            for tag in variant_tags:
                variant = ProductVariant.objects.create(variant=Variant.objects.get(pk=int(variant_option)), variant_title=tag, product=product)

                if variant_data['option'] == 1:
                    product_variant_one_list.append(variant)
                elif variant_data['option'] == 2:
                    product_variant_two_list.append(variant)
                elif variant_data['option'] == 3:
                    product_variant_three_list.append(variant)

        for variant_price_data in product_variant_prices:
            price = variant_price_data['price']
            stock = variant_price_data['stock']

            variants = variant_price_data['title'].split('/')
            product_variant_one = ProductVariant.objects.get(variant_title=variants[0], product=product)
            product_variant_two = ProductVariant.objects.get(variant_title=variants[1], product=product)
            product_variant_three = ProductVariant.objects.get(variant_title=variants[2], product=product)

            obj={
                'product_variant_one' : product_variant_one,
                'product_variant_two' : product_variant_two,
                'product_variant_three' : product_variant_three,
                'price' : price,
                'stock' : stock,
                'product' : product

            }

            product_variant_price = ProductVariantPrice(**obj)
            product_variant_price.save()



        response_data = {
            'message': 'Product created successfully'
        }

        return JsonResponse(response_data)


class ProductListView(generic.ListView):
    model = ProductVariantPrice
    template_name = 'products/list.html'
    paginate_by = 3

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        products = Product.objects.all()
        variants = ProductVariant.objects.all()
        # Retrieve query parameters from the request
        product_title = self.request.GET.get('title')
        min_price = self.request.GET.get('price_from')
        max_price = self.request.GET.get('price_to')
        date = self.request.GET.get('date')
        variant_title = self.request.GET.get('variant')

        # Filter product prices based on query parameters
        product_prices = ProductVariantPrice.objects.order_by('-id')

        if product_title:
            products = products.filter(title__icontains=product_title)

        if min_price and max_price:
            product_prices = product_prices.filter(price__range=(min_price, max_price))
            product_ids = [price.product_id for price in product_prices]
            product_ids = list(set(product_ids))
            products = products.filter(title__icontains=product_title, id__in=product_ids)

        if date:
            target_date = datetime.datetime.strptime(date, "%Y-%m-%d").date()

            products = products.filter(created_at__date=target_date)


        if variant_title:
            product_prices = product_prices.filter(
                Q(product_variant_one__variant_title__icontains=variant_title) |
                Q(product_variant_two__variant_title__icontains=variant_title) |
                Q(product_variant_three__variant_title__icontains=variant_title)
            )
            product_ids = [price.product_id for price in product_prices]
            product_ids = list(set(product_ids))
            products = products.filter(title__icontains=product_title, id__in=product_ids)
        # Retrieve additional data from the database


        # Add the filtered data to the context
        context['product_prices'] = product_prices
        context['products'] = products
        context['total_product'] = products.count()
        context['variants'] = variants.values('variant_title').distinct()

        return context


class UpdateProductView(generic.TemplateView):
    template_name = 'products/edit.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        variants = Variant.objects.filter(active=True).values('id', 'title')
        context['product'] = True
        context['variants'] = list(variants.all())
        context['csrf_token'] = get_token(self.request)
        return context
        
    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)

        products = Product.objects.all()
        variants = ProductVariant.objects.all()
        # Retrieve query parameters from the request
        product_title = self.request.GET.get('title')
        min_price = self.request.GET.get('price_from')
        max_price = self.request.GET.get('price_to')
        date = self.request.GET.get('date')
        variant_title = self.request.GET.get('variant')

        # Filter product prices based on query parameters
        product_prices = ProductVariantPrice.objects.order_by('-id')

        if product_title:
            products = products.filter(title__icontains=product_title)

        if min_price and max_price:
            product_prices = product_prices.filter(price__range=(min_price, max_price))
            product_ids = [price.product_id for price in product_prices]
            product_ids = list(set(product_ids))
            products = products.filter(title__icontains=product_title, id__in=product_ids)

        if date:
            target_date = datetime.datetime.strptime(date, "%Y-%m-%d").date()

            products = products.filter(created_at__date=target_date)

        if variant_title:
            product_prices = product_prices.filter(
                Q(product_variant_one__variant_title__icontains=variant_title) |
                Q(product_variant_two__variant_title__icontains=variant_title) |
                Q(product_variant_three__variant_title__icontains=variant_title)
            )
            product_ids = [price.product_id for price in product_prices]
            product_ids = list(set(product_ids))
            products = products.filter(title__icontains=product_title, id__in=product_ids)
        # Retrieve additional data from the database

        # Add the filtered data to the context
        context['product_prices'] = product_prices.values()
        context['products'] = products.values()
        # context['total_product'] = products.count()
        context['variants'] = list(variants.values('variant_title').distinct())

        return render(request, self.template_name, dict(context.items()))

@api_view(['GET'])
def get_product(request, pk):
    product_variant_price = ProductVariantPrice.objects.filter(product=pk).values()
    product = Product.objects.filter(pk=pk).values()
    product_variant = ProductVariant.objects.filter(product=pk).values()
    obj = {
        'product' : product,
        'product_variant' : product_variant,
        'product_variant_price' : product_variant_price
    }
    return Response(obj)


