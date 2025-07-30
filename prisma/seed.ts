import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Limpiar tablas (orden para respetar claves foráneas)
    await prisma.rating.deleteMany();
    await prisma.photo.deleteMany();
    await prisma.item.deleteMany();
    await prisma.year.deleteMany();
    await prisma.model.deleteMany();
    await prisma.brand.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
    await prisma.role.deleteMany();

    // Crear roles
    const adminRole = await prisma.role.create({ data: { nombre: 'admin' } });
    const userRole = await prisma.role.create({ data: { nombre: 'usuario' } });

    // Crear usuarios
    const admin = await prisma.user.create({
        data: {
            nombre: 'Admin User',
            email: 'admin@example.com',
            password: 'admin123',
            telefono: '111111111',
            role_id: adminRole.id,
        },
    });
    const user = await prisma.user.create({
        data: {
            nombre: 'Normal User',
            email: 'user@example.com',
            password: 'user123',
            telefono: '222222222',
            role_id: userRole.id,
        },
    });

    // Crear categorías
    const vehiculos = await prisma.category.create({ data: { nombre: 'Vehículos' } });
    const electrodomesticos = await prisma.category.create({ data: { nombre: 'Electrodomésticos' } });
    const repuestos = await prisma.category.create({ data: { nombre: 'Repuestos en general' } });

    // Vehículos
    const toyota = await prisma.brand.create({ data: { nombre: 'Toyota', category_id: vehiculos.id } });
    const corolla = await prisma.model.create({ data: { nombre: 'Corolla', brand_id: toyota.id } });
    const year2015 = await prisma.year.create({ data: { valor: 2015, model_id: corolla.id } });

    // Electrodomésticos
    const philips = await prisma.brand.create({ data: { nombre: 'Philips', category_id: electrodomesticos.id } });
    const licuadora = await prisma.model.create({ data: { nombre: 'Licuadora', brand_id: philips.id } });
    const year2020 = await prisma.year.create({ data: { valor: 2020, model_id: licuadora.id } });

    // Repuestos en general
    const generico = await prisma.brand.create({ data: { nombre: 'Genérico', category_id: repuestos.id } });
    const universal = await prisma.model.create({ data: { nombre: 'Universal', brand_id: generico.id } });
    const year2023 = await prisma.year.create({ data: { valor: 2023, model_id: universal.id } });

    // Crear items para Vehículos
    await prisma.item.createMany({
        data: [
            {
                nombre: 'Filtro de aceite',
                descripcion: 'Filtro compatible con Toyota Corolla 2015',
                precio: 1500,
                estado: 'a_la_venta',
                category_id: vehiculos.id,
                brand_id: toyota.id,
                model_id: corolla.id,
                year_id: year2015.id,
                vendedor_id: admin.id,
            },
            {
                nombre: 'Batería 12V',
                descripcion: 'Batería para auto estándar',
                precio: 12000,
                estado: 'vendido',
                category_id: vehiculos.id,
                brand_id: toyota.id,
                model_id: corolla.id,
                year_id: year2015.id,
                vendedor_id: admin.id,
                comprador_id: user.id,
                fecha_vendido: new Date(),
            },
            {
                nombre: 'Juego de pastillas de freno',
                descripcion: 'Pastillas delanteras y traseras',
                precio: 3500,
                estado: 'a_la_venta',
                category_id: vehiculos.id,
                brand_id: toyota.id,
                model_id: corolla.id,
                year_id: year2015.id,
                vendedor_id: admin.id,
            },
        ],
    });

    // Crear items para Electrodomésticos
    await prisma.item.createMany({
        data: [
            {
                nombre: 'Motor de licuadora',
                descripcion: 'Motor nuevo para licuadora Philips 2020',
                precio: 2000,
                estado: 'a_la_venta',
                category_id: electrodomesticos.id,
                brand_id: philips.id,
                model_id: licuadora.id,
                year_id: year2020.id,
                vendedor_id: user.id,
            },
            {
                nombre: 'Resistencia para horno',
                descripcion: 'Resistencia eléctrica para horno',
                precio: 800,
                estado: 'vendido',
                category_id: electrodomesticos.id,
                brand_id: philips.id,
                model_id: licuadora.id,
                year_id: year2020.id,
                vendedor_id: user.id,
                comprador_id: admin.id,
                fecha_vendido: new Date(),
            },
            {
                nombre: 'Panel de control para microondas',
                descripcion: 'Panel digital compatible con varias marcas',
                precio: 1500,
                estado: 'a_la_venta',
                category_id: electrodomesticos.id,
                brand_id: philips.id,
                model_id: licuadora.id,
                year_id: year2020.id,
                vendedor_id: user.id,
            },
        ],
    });

    // Crear items para Repuestos en general
    await prisma.item.createMany({
        data: [
            {
                nombre: 'Tornillo universal',
                descripcion: 'Tornillo de acero inoxidable',
                precio: 50,
                estado: 'a_la_venta',
                category_id: repuestos.id,
                brand_id: generico.id,
                model_id: universal.id,
                year_id: year2023.id,
                vendedor_id: admin.id,
            },
            {
                nombre: 'Correa de transmisión',
                descripcion: 'Correa para múltiples aplicaciones',
                precio: 700,
                estado: 'a_la_venta',
                category_id: repuestos.id,
                brand_id: generico.id,
                model_id: universal.id,
                year_id: year2023.id,
                vendedor_id: user.id,
            },
            {
                nombre: 'Rodamiento',
                descripcion: 'Rodamiento de alta precisión',
                precio: 1200,
                estado: 'vendido',
                category_id: repuestos.id,
                brand_id: generico.id,
                model_id: universal.id,
                year_id: year2023.id,
                vendedor_id: user.id,
                comprador_id: admin.id,
                fecha_vendido: new Date(),
            },
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 