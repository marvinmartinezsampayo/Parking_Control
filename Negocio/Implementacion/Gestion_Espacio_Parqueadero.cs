using Comun.DTO.Generales;
using Comun.DTO.Gestion;
using Comun.Enumeracion;
using Comun.Generales;
using Comun.Mapeo;
using Datos.Contexto;
using Datos.Contrato.Gestion;
using Datos.Modelo;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio.Implementacion
{
    public class Gestion_Espacio_Parqueadero:IGestion_Espacio_Parqueadero
    {
        private readonly ContextoLocal _contexto;

        public Gestion_Espacio_Parqueadero(ContextoLocal contexto)
        {
            _contexto = contexto;
        }

        public async Task<RespuestaDto<TReturn>> ActualizarAsync<TParam, TReturn>(TParam _modelo)
        {
            throw new NotImplementedException();
        }

        public async Task<RespuestaDto<TReturn>> EliminarAsync<TParam, TReturn>(TParam _modelo)
        {
            throw new NotImplementedException();
        }

        public async Task<RespuestaDto<TReturn>> GuardarAsync<TParam, TReturn>(TParam _modelo)
        {
            try
            {
                if (_modelo is not Parametros_Add_Espacio_Parqueadero_Dto _param)
                {
                    return new RespuestaDto<TReturn>
                    {
                        Codigo = EstadoOperacion.Malo,
                        Mensaje = "Los datos ingresados son insuficientes."
                    };
                }

                var espacio = Mapeador.MapearObjeto<Parametros_Add_Espacio_Parqueadero_Dto, ESPACIO_PARQUEADERO>(_param);
                _contexto.ESPACIO_PARQUEADERO.Add(espacio);

                try
                {
                    await _contexto.SaveChangesAsync();

                    return new RespuestaDto<TReturn>
                    {
                        Codigo = EstadoOperacion.Bueno,
                        Mensaje = "Transacción realizada correctamente.",
                        Respuesta = (TReturn)Convert.ChangeType("OK", typeof(TReturn))
                    };
                }
                catch (Exception ex)
                {
                    return new RespuestaDto<TReturn>
                    {
                        Codigo = EstadoOperacion.Excepcion,
                        Mensaje = $"Excepción ocurrida: {ex.Message} {ex.InnerException}"
                    };
                }
                                
            }
            catch (Exception ex)
            {
                return new RespuestaDto<TReturn>
                {
                    Codigo = EstadoOperacion.Excepcion,
                    Mensaje = $"Error interno ocurrido: {ex.Message} {ex.InnerException}"
                };
            }
        }

        public async Task<RespuestaDto<TReturn>> ObtenerAsync<TReturn>()
        {
            try
            {
                List<Respuesta_Get_Espacio_Parqueadero_Dto> listResp = new List<Respuesta_Get_Espacio_Parqueadero_Dto> ();

                var listEspacion = await  _contexto.ESPACIO_PARQUEADERO
                                         .Where(x=>x.HABILITADO)
                                         .Include(x => x.TIPO_VEHICULO)
                                         .Include(x => x.ESTADO)
                                         .Select(x => new Respuesta_Get_Espacio_Parqueadero_Dto{
                                             ID_ESPACIO = x.ID_ESPACIO,
                                             NUMERO_ESPACIO = x.NUMERO_ESPACIO,
                                             ID_TIPO_VEHICULO = x.ID_TIPO_VEHICULO,
                                             ID_ESTADO = x.ID_ESTADO,
                                             NIVEL = x.NIVEL ?? 0,
                                             SECCION = x.SECCION,
                                             HABILITADO = x.HABILITADO,
                                             TIPO_VEHICULO = x.TIPO_VEHICULO != null ? x.TIPO_VEHICULO.Nombre : null,
                                             ESTADO = x.ESTADO != null ? x.ESTADO.Nombre : null
                                         })
                                         .ToListAsync();
                try
                {                   

                    return new RespuestaDto<TReturn>
                    {
                        Codigo = EstadoOperacion.Bueno,
                        Mensaje = "Transacción realizada correctamente.",
                        Respuesta = (TReturn)Convert.ChangeType(listEspacion, typeof(TReturn))
                    };
                }
                catch (Exception ex)
                {
                    return new RespuestaDto<TReturn>
                    {
                        Codigo = EstadoOperacion.Excepcion,
                        Mensaje = $"Excepción ocurrida: {ex.Message} {ex.InnerException}"
                    };
                }

            }
            catch (Exception ex)
            {
                return new RespuestaDto<TReturn>
                {
                    Codigo = EstadoOperacion.Excepcion,
                    Mensaje = $"Error interno ocurrido: {ex.Message} {ex.InnerException}"
                };
            }
        }

        public async Task<RespuestaDto<TReturn>> ObtenerAsync<TParam, TReturn>(TParam _modelo)
        {
            throw new NotImplementedException();
        }
    }
}
