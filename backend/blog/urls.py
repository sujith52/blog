from django.urls import path
from .views import (
    signup_view, 
    login_view, 
    BlogListView, 
    BlogDetailView, 
    CreateBlogView, 
    UpdateBlogView, 
    DeleteBlogView
)

urlpatterns = [
    # User auth
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),

    # Blog CRUD
    path('blogs/', BlogListView.as_view(), name='list_blogs'),
    path('blogs/create/', CreateBlogView.as_view(), name='create_blog'),
    path('blogs/<int:pk>/', BlogDetailView.as_view(), name='blog_detail'),
    path('blogs/<int:pk>/update/', UpdateBlogView.as_view(), name='update_blog'),
    path('blogs/<int:pk>/delete/', DeleteBlogView.as_view(), name='delete_blog'),
]
