# gestion/urls.py
from rest_framework.routers import DefaultRouter
from .views import EmpleadoViewSet, ProveedorViewSet, InsumoViewSet, ClienteViewSet, HistoricoClienteViewSet, CategoriaViewSet, ProductoViewSet, VentaViewSet

router = DefaultRouter()
router.register(r'empleados', EmpleadoViewSet)
router.register(r'proveedores', ProveedorViewSet)
router.register(r'insumos', InsumoViewSet)
router.register(r'clientes', ClienteViewSet)
router.register(r'historico_clientes', HistoricoClienteViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'productos', ProductoViewSet)
router.register(r'ventas', VentaViewSet)

urlpatterns = router.urls
