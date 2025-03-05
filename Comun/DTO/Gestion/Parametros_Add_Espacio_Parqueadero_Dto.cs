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
        private string _espacio;

        [Required, Display(Name = "NumeroEspacio")]
        [StringLength(30, ErrorMessage = "El {0} debe tener entre 1 y 10 caracteres.", MinimumLength = 10)]
        [JsonPropertyName("NumeroEspacio")]
        public string NUMERO_ESPACIO { get => _espacio; set => _espacio = value.Trim().ToUpper(); }

        [Required, Display(Name = "IdTipoVehiculo")]
        [JsonPropertyName("IdTipoVehiculo")]
        public long ID_TIPO_VEHICULO { get; set; }

        [Required, Display(Name = "IdEstado")]
        [JsonPropertyName("IdEstado")]
        public long ID_ESTADO { get; set; }

        [Required, Display(Name = "Nivel")]
        [JsonPropertyName("Nivel")]
        public int NIVEL { get; set; }

        [Required, Display(Name = "Seccion")]
        [JsonPropertyName("Seccion")]
        public string SECCION { get; set; }

        [Required, Display(Name = "Habilitado")]
        [JsonPropertyName("Habilitado")]
        public int HABILITADO { get; set; }
    }
}
