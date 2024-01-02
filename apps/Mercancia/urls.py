from django.urls import path
from .views import *

# URL de cada vista

urlpatterns = [
    # Anillo:
    path('Anillos', AnillosListView.as_view()),                     # List
    path('AnillosAdmin', AnillosListAdminView.as_view()),           # ListAdmin
    path('Anillos/Name', AnillosListNameView.as_view()),            # ListName
    path('Anillos/Size', AnillosListSizeView.as_view()),            # ListSize
    path('Anillos/Purity', AnillosListPurezaView.as_view()),        # ListPur
    path('Anillos/Weight', AnillosListPesoView.as_view()),          # ListPes
    path('Anillos/Price', AnillosListPrecioView.as_view()),         # ListPre
    path('Anillo/<id>', AnilloView.as_view()
         ),                      # Element
    path('EditAnillo', EditAnilloView.as_view()),                   # Edit
    path('EditAnilloPrivate', EditAnilloPrivateView.as_view()),     # EditPrivate
    path('EditAnilloPublic', EditAnilloPublicView.as_view()
         ),                   # EditPublic
    path('DeleteAnillo/<id>', DeleteAnilloView.as_view()),          # Delete
    path('CreateAnillo', CreateAnilloView.as_view()),               # Create
    path('Anillos/Search', SearchAnillosView.as_view()),            # Search

    # Cadena:
    path('Cadenas', CadenasListView.as_view()),                     # List
    path('CadenasAdmin', CadenasListAdminView.as_view()),           # ListAdmin
    path('Cadenas/Name', CadenasListNameView.as_view()),            # ListName
    path('Cadenas/Size', CadenasListSizeView.as_view()),            # ListSize
    path('Cadenas/Purity', CadenasListPurezaView.as_view()),        # ListPur
    path('Cadenas/Weight', CadenasListPesoView.as_view()),          # ListPes
    path('Cadenas/Price', CadenasListPrecioView.as_view()),         # ListPre
    path('Cadena/<id>', CadenaView.as_view()
         ),                      # Element
    path('EditCadena', EditCadenaView.as_view()),                   # Edit
    path('EditCadenaPrivate', EditCadenaPrivateView.as_view()),     # EditPrivate
    path('EditCadenaPublic', EditCadenaPublicView.as_view()
         ),                   # EditPublic
    path('DeleteCadena/<id>', DeleteCadenaView.as_view()),          # Delete
    path('CreateCadena', CreateCadenaView.as_view()),               # Create
    path('Cadenas/Search', SearchCadenasView.as_view()),            # Search

    # Brazalete:
    path('Brazaletes', BrazaletesListView.as_view()
         ),                     # List
    # ListAdmin
    path('BrazaletesAdmin', BrazaletesListAdminView.as_view()),
    path('Brazaletes/Name', BrazaletesListNameView.as_view()
         ),            # ListName
    path('Brazaletes/Size', BrazaletesListSizeView.as_view()
         ),            # ListSize
    path('Brazaletes/Purity',
         BrazaletesListPurezaView.as_view()),        # ListPur
    path('Brazaletes/Weight',
         BrazaletesListPesoView.as_view()),          # ListPes
    path('Brazaletes/Price',
         BrazaletesListPrecioView.as_view()),         # ListPre
    path('Brazalete/<id>', BrazaleteView.as_view()
         ),                      # Element
    path('EditBrazalete', EditBrazaleteView.as_view()),                   # Edit
    path('EditBrazaletePrivate',
         EditBrazaletePrivateView.as_view()),     # EditPrivate
    path('EditBrazaletePublic', EditBrazaletePublicView.as_view()
         ),                   # EditPublic
    path('DeleteBrazalete/<id>',
         DeleteBrazaleteView.as_view()),          # Delete
    path('CreateBrazalete', CreateBrazaleteView.as_view()
         ),               # Create
    path('Brazaletes/Search', SearchBrazaletesView.as_view()),            # Search

    # Tobilleras:
    path('Tobilleras', TobillerasListView.as_view()
         ),                     # List
    # ListAdmin
    path('TobillerasAdmin', TobillerasListAdminView.as_view()),
    path('Tobilleras/Name', TobillerasListNameView.as_view()
         ),            # ListName
    path('Tobilleras/Size', TobillerasListSizeView.as_view()
         ),            # ListSize
    path('Tobilleras/Purity',
         TobillerasListPurezaView.as_view()),        # ListPur
    path('Tobilleras/Weight',
         TobillerasListPesoView.as_view()),          # ListPes
    path('Tobilleras/Price',
         TobillerasListPrecioView.as_view()),         # ListPre
    path('Tobillera/<id>', TobilleraView.as_view()
         ),                      # Element
    path('EditTobillera', EditTobilleraView.as_view()),                   # Edit
    path('EditTobilleraPrivate',
         EditTobilleraPrivateView.as_view()),     # EditPrivate
    path('EditTobilleraPublic', EditTobilleraPublicView.as_view()
         ),                   # EditPublic
    path('DeleteTobillera/<id>',
         DeleteTobilleraView.as_view()),          # Delete
    path('CreateTobillera', CreateTobilleraView.as_view()
         ),               # Create
    path('Tobilleras/Search', SearchTobillerasView.as_view()),            # Search

    # Pircings:
    path('Pircings', PircingsListView.as_view()),                     # List
    path('PircingsAdmin', PircingsListAdminView.as_view()),           # ListAdmin
    path('Pircings/Name', PircingsListNameView.as_view()),            # ListName
    path('Pircings/Size', PircingsListSizeView.as_view()),            # ListSize
    path('Pircings/Purity', PircingsListPurezaView.as_view()),        # ListPur
    path('Pircings/Weight', PircingsListPesoView.as_view()),          # ListPes
    path('Pircings/Price', PircingsListPrecioView.as_view()),         # ListPre
    path('Pircing/<id>', PircingView.as_view()
         ),                      # Element
    path('EditPircing', EditPircingView.as_view()),                   # Edit
    path('EditPircingPrivate',
         EditPircingPrivateView.as_view()),     # EditPrivate
    path('EditPircingPublic', EditPircingPublicView.as_view()
         ),                   # EditPublic
    path('DeletePircing/<id>', DeletePircingView.as_view()),          # Delete
    path('CreatePircing', CreatePircingView.as_view()),               # Create
    path('Pircings/Search', SearchPircingsView.as_view()),            # Search

    # Aretes:
    path('Aretes', AretesListView.as_view()),                     # List
    path('AretesAdmin', AretesListAdminView.as_view()),           # ListAdmin
    path('Aretes/Name', AretesListNameView.as_view()),            # ListName
    path('Aretes/Size', AretesListSizeView.as_view()),            # ListSize
    path('Aretes/Purity', AretesListPurezaView.as_view()),        # ListPur
    path('Aretes/Weight', AretesListPesoView.as_view()),          # ListPes
    path('Aretes/Price', AretesListPrecioView.as_view()),         # ListPre
    path('Arete/<id>', AreteView.as_view()),                      # Element
    path('EditArete', EditAreteView.as_view()),                   # Edit
    path('EditAretePrivate', EditAretePrivateView.as_view()),     # EditPrivate
    path('EditAretePublic', EditAretePublicView.as_view()
         ),                   # EditPublic
    path('DeleteArete/<id>', DeleteAreteView.as_view()),          # Delete
    path('CreateArete', CreateAreteView.as_view()),               # Create
    path('Aretes/Search', SearchAretesView.as_view()),            # Search

    # Dijes:
    path('Dijes', DijesListView.as_view()),                     # List
    path('DijesAdmin', DijesListAdminView.as_view()),           # ListAdmin
    path('Dijes/Name', DijesListNameView.as_view()),            # ListName
    path('Dijes/Size', DijesListSizeView.as_view()),            # ListSize
    path('Dijes/Purity', DijesListPurezaView.as_view()),        # ListPur
    path('Dijes/Weight', DijesListPesoView.as_view()),          # ListPes
    path('Dijes/Price', DijesListPrecioView.as_view()),         # ListPre
    path('Dije/<id>', DijeView.as_view()),                      # Element
    path('EditDije', EditDijeView.as_view()),                   # Edit
    path('EditDijePrivate', EditDijePrivateView.as_view()),     # EditPrivate
    path('EditDijePublic', EditDijePublicView.as_view()
         ),                   # EditPublic
    path('DeleteDije/<id>', DeleteDijeView.as_view()),          # Delete
    path('CreateDije', CreateDijeView.as_view()),               # Create
    path('Dijes/Search', SearchDijesView.as_view()),            # Search
]
