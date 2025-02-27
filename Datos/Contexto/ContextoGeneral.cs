using Datos.Modelo;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.Contexto
{
    public class ContextoGeneral : DbContext
    {
        public ContextoGeneral(DbContextOptions<ContextoGeneral> options) : base(options)
        {
        }

        public DbSet<DETALLE_MASTER> DETALLE_MASTER { get; set; }
        public DbSet<USUARIO> USUARIO { get; set; }
        public DbSet<ROLES_X_USUARIO> ROLES_X_USUARIO { get; set; }





    }
}
