using Comun.Generales;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.Contrato.Crud
{
    public interface IEliminar
    {
        Task<RespuestaDto<TReturn>> EliminarAsync<TParam, TReturn>(TParam _modelo);
    }
}
