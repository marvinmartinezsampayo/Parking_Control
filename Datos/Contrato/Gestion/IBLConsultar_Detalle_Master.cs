using Comun.DTO.Generales;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.Contrato.Gestion
{
    public interface IBLConsultar_Detalle_Master
    {
        public Task<List<Respuesta_Consulta_Detalle_Master>> ListaDetalle(int id);       
    }
}
