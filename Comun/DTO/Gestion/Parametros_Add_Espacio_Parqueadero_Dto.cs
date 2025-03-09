using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Comun.DTO.Gestion
{
    public class Parametros_Add_Espacio_Parqueadero_Dto
    {
        public long? ID_ESPACIO { get; set; }

        [Required]
        public string NUMERO_ESPACIO { get; set; }

        [Required]
        public long ID_TIPO_VEHICULO { get; set; }

        [Required]
        public long ID_ESTADO { get; set; }

        [Required]
        public int NIVEL { get; set; }

       
        public string SECCION { get; set; }

        [Required]
        public bool HABILITADO { get; set; }
    }
}
