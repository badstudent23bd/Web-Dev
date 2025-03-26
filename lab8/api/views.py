from django.http import JsonResponse

from api.models import Category, Product


def category_list(request):
    categories = Category.objects.all()
    return JsonResponse(
        {
            "categories": [
                {
                    "id": category.id,
                    "name": category.name,
                }
                for category in categories
            ]
        }
    )

def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
        return JsonResponse(
            {
                "id": category.id,
                "name": category.name,
            }
        )
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)

def category_products(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
        products = Product.objects.filter(category=category)
        return JsonResponse(
            {
                "products": [
                    {
                        "id": product.id,
                        "name": product.name,
                        "price": product.price,
                        "description": product.description,
                        "count": product.count,
                        "is_active": product.is_active,
                    }
                    for product in products
                ]
            }
        )
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)

def product_list(request):
    products = Product.objects.all()
    return JsonResponse(
        {
            "products": [
                {
                    "id": product.id,
                    "name": product.name,
                    "price": product.price,
                    "description": product.description,
                    "count": product.count,
                    "is_active": product.is_active,
                    "category": product.category.name,
                }
                for product in products
            ]
        }
    )

def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        return JsonResponse(
            {
                "id": product.id,
                "name": product.name,
                "price": product.price,
                "description": product.description,
                "count": product.count,
                "is_active": product.is_active,
                "category": product.category.name,
            }
        )
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)