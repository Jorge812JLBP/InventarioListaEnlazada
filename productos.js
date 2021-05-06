function capturar()
{
    function Productos(id,nombre,cantidad,precio)
    {
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
        this.siguiente=null;
    }
    var idCapturar = document.getElementById("idt").value;
    var nombreCapturar = document.getElementById("nombret").value;
    var cantidadCapturar = document.getElementById("cantidadt").value;
    var precioCapturar = document.getElementById("preciot").value;


     nuevoProducto = new Productos(idCapturar,nombreCapturar,cantidadCapturar,precioCapturar);

    console.log(nuevoProducto);

    agregar();
    
    
}




this.inicio=null;
function agregar()
{
    
   if (this.inicio==null)
        this.inicio=nuevoProducto;
      else
      {
        let t=this.inicio
        while(t.siguiente!=null)
        {
          t=t.siguiente; 
        }                
        t.siguiente=nuevoProducto;
      }
   document.getElementById("tabla").innerHTML+= "<tbody><td>"+nuevoProducto.id+"</td><td>"+nuevoProducto.nombre+"</td><td>"+nuevoProducto.cantidad+"</td><td>"+nuevoProducto.precio+"</td></tbody>";
}



function listar()
{
    let res="";
    let t=this.inicio;
    while(t!=null)
    {
      res+= "<tbody><td>"+t.id+"</td><td>"+t.nombre+"</td><td>"+t.cantidad+"</td><td>"+t.precio+"</td></tbody>";;
      t=t.siguiente;
    }
      return document.getElementById("tabla").innerHTML=res;
}



function eliminar(eliminarID)
{
    if(this.inicio!=null)
    {
        if(this.inicio.id==eliminarID)
        {
            this.inicio=this.inicio.siguiente;
        }
        else
        {
            let t= this.inicio;
            while(t.siguiente!=null)
            {
                if(t.siguiente.id==eliminarID)
                {
                    t.siguiente=t.siguiente.siguiente;
                    return true;
                }
                else
                {
                    t=t.siguiente;
                }
            }
            return document.getElementById("tabla").innerHTML= "<h1>" + "Se elimino" + "</h1>"
        }
    }
   
}





function buscar(busquedaid)
{
let t=this.inicio;
while(t!=null && t.id!=busquedaid)
{
    t=t.siguiente;
}
return document.getElementById("busID").innerHTML= "--> ID: " + t.id + "--> Nombre: " + t.nombre + "--> Cantidad: " + t.cantidad + "-->Precio" + t.precio;

}