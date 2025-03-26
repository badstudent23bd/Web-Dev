from django.contrib import admin

from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = (
        "id",
        "name",
    )
    ordering = ("id",)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "price",
        "description",
        "count",
        "is_active",
        "category",
    )
    search_fields = (
        "id",
        "name",
    )
    ordering = ("id", "is_active", "category")
    list_filter = ("is_active", "category")

    prepopulated_fields = {"description": ("name",)}
