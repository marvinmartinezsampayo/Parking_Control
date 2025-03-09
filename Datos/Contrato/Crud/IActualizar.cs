using Comun.Generales;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.Contrato.Crud
{
    public interface IActualizar
    {
        Task<RespuestaDto<TReturn>> ActualizarAsync<TParam, TReturn>(TParam _modelo);
    }
}
