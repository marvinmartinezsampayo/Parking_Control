using Datos.Contexto;
using Datos.Contratos.Login;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using Negocio.Implementacion;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Login/Index";
        options.AccessDeniedPath = "/Login/CerrarSesion";
        options.LogoutPath = "/Login/CerrarSesion";
        options.Cookie.Name = "Parquing";
        options.Cookie.HttpOnly = true;
        //vencimiento
        options.ExpireTimeSpan = TimeSpan.FromMinutes(1);
        options.Cookie.MaxAge = options.ExpireTimeSpan;
        options.SlidingExpiration = true;
        // ReturnUrlParameter requires 
        options.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
    });

//cadena conexión

builder.Services.AddDbContext<ContextoGeneral>(options =>
{    
    options.UseMySql(builder.Configuration.GetConnectionString("strConexionMySql"), new MySqlServerVersion(new Version(8, 0, 31)));
});

builder.Services.AddDbContext<ContextoLocal>(options =>
{
    options.UseMySql(builder.Configuration.GetConnectionString("strConexionMySqlLocal"), new MySqlServerVersion(new Version(8, 0, 31)));
});


// Seguridad
builder.Services.AddScoped<IGestionUsuario, Gestion_Login>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();


app.MapControllerRoute(
      name: "areas",
      pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
    );

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Login}/{action=Index}/{id?}");

app.Run();


