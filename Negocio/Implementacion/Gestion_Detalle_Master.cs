using Comun.DTO.Generales;
using Datos.Contexto;
using Datos.Contrato.Gestion;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio.Implementacion
{
    public class Gestion_Detalle_Master:IBLConsultar_Detalle_Master
    {
        private readonly ContextoLocal _contexto;

        public Gestion_Detalle_Master(ContextoLocal contexto)
        {
            _contexto = contexto;
        }

        public async Task<List<Respuesta_Consulta_Detalle_Master>> ListaDetalle(int id)
        {
            List<Respuesta_Consulta_Detalle_Master> Resp = new List<Respuesta_Consulta_Detalle_Master> ();

            try
            {
                if(id > 0)
                {
                    Resp = await _contexto.DETALLE_MASTER
                                .Where(d => d.ID_TIPO == id && d.Habilitado)
                                .Select(d => new Respuesta_Consulta_Detalle_Master
                                {
                                    ID = d.Id,
                                    NOMBRE = d.Nombre,
                                    ABREVIACION = d.Abreviacion
                                })
                                .ToListAsync();

                }                
                return Resp;               
            }
            catch (Exception ex)
            {
                return Resp;
            }
        }
    }
}
