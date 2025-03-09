using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comun.DTO.Gestion
{
    public class Respuesta_Get_Espacio_Parqueadero_Dto
    {        
        public long ID_ESPACIO { get; set; }        
        public string? NUMERO_ESPACIO { get; set; }        
        public long ID_TIPO_VEHICULO { get; set; }       
        public long ID_ESTADO { get; set; }        
        public int NIVEL { get; set; }
        public string? SECCION { get; set; }        
        public bool HABILITADO { get; set; }        
        public string? TIPO_VEHICULO { get; set; }        
        public string? ESTADO { get; set; }
    }
}
