from articles.models import Article
from .serializers import ArticleSerializers
from rest_framework import viewsets

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers


#from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
# class ArticleListView(ListAPIView):
#     '''general API view which render a collection of model instances by HTTP get'''
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializers
#
# class ArticleDetailView(RetrieveAPIView):
#     '''detail API view which render single model instances by HTTP get'''
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializers
#
# class ArticleCreateView(CreateAPIView):
#     '''Create API view which Create new instance by HTTP post'''
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializers
#
# class ArticleUpdateView(UpdateAPIView):
#     '''Create API view which update instance by HTTP put'''
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializers
#
# class ArticleDeleteView(DestroyAPIView):
#     '''Create API view which deletes instance by HTTP post'''
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializers