using Datos.Contrato.Crud;
using Datos.Contratos.Crud;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.Contrato.Gestion
{
    public interface IGestion_Espacio_Parqueadero: IGuardar, IObtener, IActualizar, IEliminar
    {
    }
}
