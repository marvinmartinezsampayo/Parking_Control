using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Datos.Modelo
{
    [Table("ESPACIO_PARQUEADERO")]
    public class ESPACIO_PARQUEADERO
    {
        [Key]       
        [Column("ID_ESPACIO")]
        public long ID_ESPACIO { get; set; }

        [Required]        
        [Column("NUMERO_ESPACIO")]        
        public string NUMERO_ESPACIO { get; set; }

        [Required]
        [ForeignKey("TIPO_VEHICULO")]
        [Column("ID_TIPO_VEHICULO")]
        public long ID_TIPO_VEHICULO { get; set; }

        [Required]
        [ForeignKey("ESTADO")]
        [Column("ID_ESTADO")]
        public long ID_ESTADO { get; set; }

        [Column("NIVEL")]
        public int? NIVEL { get; set; }
                
        [Column("SECCION")]
        public string SECCION { get; set; }

        [Required]
        [Column("HABILITADO")]
        public bool HABILITADO { get; set; }

        // Relaciones       
        public virtual DETALLE_MASTER TIPO_VEHICULO { get; set; }        
        public virtual DETALLE_MASTER ESTADO { get; set; }
    }
}
