from django.db import models

# Create your models here.

class Blogs(models.Model):
    blog_name=models.CharField(max_length=350)
    farmer=models.CharField(max_length=350)
    image=models.ImageField(blank=True,null=True)
    summary=models.TextField(blank=True,null=True)
    vitamin=models.TextField(blank=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.blog_name