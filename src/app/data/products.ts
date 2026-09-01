import { Product } from '../context/AppContext';

// Lista de IDs de produtos que requerem receita médica
export const productsRequiringPrescription = ['1', '3', '6', '7', '9', '11', '14', '29'];

export const products: Product[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    price: 12.50,
    pharmacy: 'Farmácia Drogasil',
    description: 'Indicado para dor e febre. Comprimidos revestidos. Adultos e crianças acima de 12 anos.',
    image: 'https://product-data.raiadrogasil.io/images/3541518.webp',
    boxImage: 'https://product-data.raiadrogasil.io/images/3541518.webp',
    capsuleImage: 'https://product-data.raiadrogasil.io/images/3541518.webp',
    categoryId: '1'
  },
  {
    id: '2',
    name: 'Dipirona 500mg',
    price: 15.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Analgésico e antitérmico. Alívio rápido de dores e febre.',
    image: 'https://paguemenos.vtexassets.com/arquivos/ids/644482-800-auto?v=638008072496630000&width=800&height=auto&aspect=true',
    boxImage: 'https://paguemenos.vtexassets.com/arquivos/ids/644482-800-auto?v=638008072496630000&width=800&height=auto&aspect=true',
    capsuleImage: 'https://paguemenos.vtexassets.com/arquivos/ids/644482-800-auto?v=638008072496630000&width=800&height=auto&aspect=true',
    categoryId: '1'
  },
  {
    id: '3',
    name: 'Ibuprofeno 600mg',
    price: 30.00,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Anti-inflamatório não esteroidal. Indicado para dores musculares e articulares.',
    image: 'https://santaluciadrogaria.vtexassets.com/arquivos/ids/163671-800-1067?v=637638139981370000&width=800&height=1067&aspect=true',
    boxImage: 'https://santaluciadrogaria.vtexassets.com/arquivos/ids/163671-800-1067?v=637638139981370000&width=800&height=1067&aspect=true',
    capsuleImage: 'https://santaluciadrogaria.vtexassets.com/arquivos/ids/163671-800-1067?v=637638139981370000&width=800&height=1067&aspect=true',
    categoryId: '1'
  },
  {
    id: '4',
    name: 'Vitamina C 1g',
    price: 10.00,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Suplemento vitamínico. Fortalece o sistema imunológico.',
    image: 'https://dmvfarma.vtexassets.com/arquivos/ids/322648-800-auto?v=639052353060630000&width=800&height=auto&aspect=true',
    boxImage: 'https://dmvfarma.vtexassets.com/arquivos/ids/322648-800-auto?v=639052353060630000&width=800&height=auto&aspect=true',
    capsuleImage: 'https://dmvfarma.vtexassets.com/arquivos/ids/322648-800-auto?v=639052353060630000&width=800&height=auto&aspect=true',
    categoryId: '3'
  },
  {
    id: '5',
    name: 'Xarope Infantil Tosse',
    price: 31.99,
    pharmacy: 'Farmácia Drogasil',
    description: 'Para tosse infantil. Sabor agradável para crianças.',
    image: 'https://images.ctfassets.net/dnhuh4prvxcr/5jgNaPWjJrmX7eaFiXsWx2/8456f0e0a3f548241856fdc5bce74e67/jarabe_Jarabe_infantil.Final_Color_Output.0004_840.png',
    boxImage: 'https://images.ctfassets.net/dnhuh4prvxcr/5jgNaPWjJrmX7eaFiXsWx2/8456f0e0a3f548241856fdc5bce74e67/jarabe_Jarabe_infantil.Final_Color_Output.0004_840.png',
    capsuleImage: 'https://images.ctfassets.net/dnhuh4prvxcr/5jgNaPWjJrmX7eaFiXsWx2/8456f0e0a3f548241856fdc5bce74e67/jarabe_Jarabe_infantil.Final_Color_Output.0004_840.png',
    categoryId: '4'
  },
  {
    id: '6',
    name: 'Amoxicilina 250mg',
    price: 22.80,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Antibiótico de amplo espectro. Tratamento de infecções bacterianas.',
    image: 'https://www.drogariaminasbrasil.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/1013216aba/amoxicilina-250mg-5ml-suspensao-oral-150ml-cimed-generico.jpg',
    boxImage: 'https://www.drogariaminasbrasil.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/1013216aba/amoxicilina-250mg-5ml-suspensao-oral-150ml-cimed-generico.jpg',
    capsuleImage: 'https://www.drogariaminasbrasil.com.br/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/1013216aba/amoxicilina-250mg-5ml-suspensao-oral-150ml-cimed-generico.jpg',
    categoryId: '2'
  },
  {
    id: '7',
    name: 'Omeprazol 20mg',
    price: 18.90,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Usado para tratar azia, refluxo e reduzir a acidez do estômago.',
    image: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/6361811ec/omeprazol-20mg-com-56-capsulas-generico-teuto_jpg.webp',
    boxImage: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/6361811ec/omeprazol-20mg-com-56-capsulas-generico-teuto_jpg.webp',
    capsuleImage: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/6361811ec/omeprazol-20mg-com-56-capsulas-generico-teuto_jpg.webp'
  },
  {
    id: '8',
    name: 'Loratadina 10mg',
    price: 16.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Antialérgico indicado para rinite, espirros e coceiras no corpo.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRiH1U-ViNdlJEEU9yrnu1CYwCDaH5DcM9O9NJYsR6-2kma-Gcy9rp4yL&s=10',
    boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRiH1U-ViNdlJEEU9yrnu1CYwCDaH5DcM9O9NJYsR6-2kma-Gcy9rp4yL&s=10',
    capsuleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRiH1U-ViNdlJEEU9yrnu1CYwCDaH5DcM9O9NJYsR6-2kma-Gcy9rp4yL&s=10',
    categoryId: '2'
  },
  {
    id: '9',
    name: 'Nimesulida 100mg',
    price: 16.70,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Anti-inflamatório. Alívio de dores e inflamações.',
    image: 'https://d3mhu901409m9r.cloudfront.net/Custom/Content/Products/45/98/45986_nimesulida-100-mg-c-12-cpr-globo-p37733_m1_638700461701870805.webp',
    boxImage: 'https://d3mhu901409m9r.cloudfront.net/Custom/Content/Products/45/98/45986_nimesulida-100-mg-c-12-cpr-globo-p37733_m1_638700461701870805.webp',
    capsuleImage: 'https://d3mhu901409m9r.cloudfront.net/Custom/Content/Products/45/98/45986_nimesulida-100-mg-c-12-cpr-globo-p37733_m1_638700461701870805.webp',
    categoryId: '1'
  },
  {
    id: '10',
    name: 'Buscopan',
    price: 21.30,
    pharmacy: 'Farmácia Bem Estar',
    description: 'Indicado para cólicas e dores abdominais com ação rápida.',
    image: 'https://product-data.raiadrogasil.io/images/6936879.webp',
    boxImage: 'https://product-data.raiadrogasil.io/images/6936879.webp',
    capsuleImage: 'https://product-data.raiadrogasil.io/images/6936879.webp',
    categoryId: '1'
  },
  {
    id: '11',
    name: 'Tadalafila 5mg',
    price: 39.90,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Indicado para disfunção erétil e melhora da circulação sanguínea.',
    image: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/1013224d75/tadalafila-5mg-com-30-comprimidos-revestidos-generico-cimed_jpg.webp',
    boxImage: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/1013224d75/tadalafila-5mg-com-30-comprimidos-revestidos-generico-cimed_jpg.webp',
    capsuleImage: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/1013224d75/tadalafila-5mg-com-30-comprimidos-revestidos-generico-cimed_jpg.webp'
  },
  {
    id: '12',
    name: 'Neosaldina',
    price: 20.00,
    pharmacy: 'Farmácia Popular',
    description: 'Indicado para dor de cabeça e enxaqueca.',
    image: 'https://d16w7cuzwgzfcy.cloudfront.net/Custom/Content/Products/14/80/148013_neosaldina-30drg-p510581_z1_637558209623617854.webp',
    boxImage: 'https://d16w7cuzwgzfcy.cloudfront.net/Custom/Content/Products/14/80/148013_neosaldina-30drg-p510581_z1_637558209623617854.webp',
    capsuleImage: 'https://d16w7cuzwgzfcy.cloudfront.net/Custom/Content/Products/14/80/148013_neosaldina-30drg-p510581_z1_637558209623617854.webp',
    categoryId: '1'
  },
  {
    id: '13',
    name: 'Dorflex',
    price: 13.70,
    pharmacy: 'Farmácia Drogasil',
    description: 'Analgésico e relaxante muscular. Alívio de dores e tensões.',
    image: 'https://drogal.vtexassets.com/arquivos/ids/258835/141155.jpg?v=638884469950600000',
    boxImage: 'https://drogal.vtexassets.com/arquivos/ids/258835/141155.jpg?v=638884469950600000',
    capsuleImage: 'https://drogal.vtexassets.com/arquivos/ids/258835/141155.jpg?v=638884469950600000',
    categoryId: '1'
  },
  {
    id: '14',
    name: 'Torsilax',
    price: 25.90,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Ajuda no alívio de dores musculares e tensão no corpo.',
    image: 'https://dcdn-us.mitiendanube.com/stores/003/033/056/products/78967142008041-0275cf75d329af3c8b16873519841510-1024-1024.webp',
    boxImage: 'https://dcdn-us.mitiendanube.com/stores/003/033/056/products/78967142008041-0275cf75d329af3c8b16873519841510-1024-1024.webp',
    capsuleImage: 'https://dcdn-us.mitiendanube.com/stores/003/033/056/products/78967142008041-0275cf75d329af3c8b16873519841510-1024-1024.webp',
    categoryId: '1'
  },
  {
    id: '15',
    name: 'Engov',
    price: 12.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Auxilia no alívio dos sintomas de ressaca.',
    image: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/95782a760/engov-com-12-comprimidos_jpg.webp',
    boxImage: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/95782a760/engov-com-12-comprimidos_jpg.webp',
    capsuleImage: 'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/95782a760/engov-com-12-comprimidos_jpg.webp'
  },
  {
    id: '16',
    name: 'Vitamina D3 2000UI',
    price: 28.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Suplemento de vitamina D. Saúde óssea e imunidade.',
    image: 'https://product-data.raiadrogasil.io/images/13966093.webp',
    boxImage: 'https://product-data.raiadrogasil.io/images/13966093.webp',
    capsuleImage: 'https://product-data.raiadrogasil.io/images/13966093.webp',
    categoryId: '3'
  },
  {
    id: '17',
    name: 'Imune (vitamínico)',
    price: 24.90,
    pharmacy: 'Farmácia Drogasil',
    description: 'Suplemento que ajuda a fortalecer o sistema imunológico e prevenir doenças.',
    image: 'https://dmvfarma.vtexassets.com/arquivos/ids/322147/0d773825-5b2e-4607-88ca-2b8902d49c11.jpg?v=639052340992200000',
    boxImage: 'https://dmvfarma.vtexassets.com/arquivos/ids/322147/0d773825-5b2e-4607-88ca-2b8902d49c11.jpg?v=639052340992200000',
    capsuleImage: 'https://dmvfarma.vtexassets.com/arquivos/ids/322147/0d773825-5b2e-4607-88ca-2b8902d49c11.jpg?v=639052340992200000',
    categoryId: '3'
  },
  {
    id: '18',
    name: 'Benegrip',
    price: 35.00,
    pharmacy: 'Farmácia Popular',
    description: 'Indicado para tratar sintomas gripais comuns.',
    image: 'https://io.convertiez.com.br/m/farmaponte/shop/products/images/18021/medium/benegrip-500mg-30mg-2mg-caixa-com-20-comprimidos-revestidos_9862.jpg',
    boxImage: 'https://io.convertiez.com.br/m/farmaponte/shop/products/images/18021/medium/benegrip-500mg-30mg-2mg-caixa-com-20-comprimidos-revestidos_9862.jpg',
    capsuleImage: 'https://io.convertiez.com.br/m/farmaponte/shop/products/images/18021/medium/benegrip-500mg-30mg-2mg-caixa-com-20-comprimidos-revestidos_9862.jpg',
    categoryId: '2'
  },
  {
    id: '19',
    name: 'Multigripe',
    price: 18.90,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Indicado para aliviar sintomas de gripe como febre, dor no corpo, coriza e congestão nasal.',
    image: 'https://product-data.raiadrogasil.io/images/3715932.webp',
    boxImage: 'https://product-data.raiadrogasil.io/images/3715932.webp',
    capsuleImage: 'https://product-data.raiadrogasil.io/images/3715932.webp',
    categoryId: '2'
  },
  {
    id: '20',
    name: 'Ômega 3',
    price: 32.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Suplemento de ácidos graxos. Saúde cardiovascular.',
    image: 'https://drogal.vtexassets.com/arquivos/ids/273505/189474.jpg?v=639011378294530000',
    boxImage: 'https://drogal.vtexassets.com/arquivos/ids/273505/189474.jpg?v=639011378294530000',
    capsuleImage: 'https://drogal.vtexassets.com/arquivos/ids/273505/189474.jpg?v=639011378294530000',
    categoryId: '3'
  },
  {
    id: '21',
    name: 'Expec Xarope',
    price: 21.50,
    pharmacy: 'Farmácia Popular',
    description: 'Usado para aliviar a tosse e ajudar na eliminação de secreções.',
    image: 'https://dmvfarma.vtexassets.com/arquivos/ids/250286-800-auto?v=638797456929800000&width=800&height=auto&aspect=true',
    boxImage: 'https://dmvfarma.vtexassets.com/arquivos/ids/250286-800-auto?v=638797456929800000&width=800&height=auto&aspect=true',
    capsuleImage: 'https://dmvfarma.vtexassets.com/arquivos/ids/250286-800-auto?v=638797456929800000&width=800&height=auto&aspect=true',
    categoryId: '2'
  },
  {
    id: '22',
    name: 'Antigripal infantil',
    price: 36.89,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Antigripal Infantil Benegrip Multi Solução Oral Sabor Frutas Vermelhas 240ml.',
    image: 'https://drogal.vtexassets.com/arquivos/ids/250255/131566.jpg?v=638773879566130000',
    boxImage: 'https://drogal.vtexassets.com/arquivos/ids/250255/131566.jpg?v=638773879566130000',
    capsuleImage: 'https://drogal.vtexassets.com/arquivos/ids/250255/131566.jpg?v=638773879566130000',
    categoryId: '4'
  },
  {
    id: '23',
    name: 'Sal de Fruta Eno',
    price: 9.50,
    pharmacy: 'Farmácia Drogasil',
    description: 'Produto clássico para azia e má digestão.',
    image: 'https://product-data.raiadrogasil.io/images/17504323.webp',
    boxImage: 'https://product-data.raiadrogasil.io/images/17504323.webp',
    capsuleImage: 'https://product-data.raiadrogasil.io/images/17504323.webp'
  },
  {
    id: '24',
    name: 'Fralda Descartável Infantil',
    price: 39.90,
    pharmacy: 'Farmácia Popular',
    description: 'Indicada para bebês, com alta absorção, conforto e proteção contra vazamentos ao longo do dia.',
    image: 'https://cdn.awsli.com.br/600x700/2745/2745265/produto/318789749/1660-jk46u8sj0l.jpeg',
    boxImage: 'https://cdn.awsli.com.br/600x700/2745/2745265/produto/318789749/1660-jk46u8sj0l.jpeg',
    capsuleImage: 'https://cdn.awsli.com.br/600x700/2745/2745265/produto/318789749/1660-jk46u8sj0l.jpeg',
    categoryId: '4'
  },
  {
    id: '25',
    name: 'Fralda Geriátrica',
    price: 49.90,
    pharmacy: 'Farmácia Drogasil',
    description: 'Indicada para adultos e idosos, oferecendo segurança, absorção e conforto no uso diário.',
    image: 'https://images.tcdn.com.br/img/img_prod/1183384/fralda_geriatrica_plus_bigfral_1615_1_e99f81cf89a0ed8de1a2f80e920e9805.jpg',
    boxImage: 'https://images.tcdn.com.br/img/img_prod/1183384/fralda_geriatrica_plus_bigfral_1615_1_e99f81cf89a0ed8de1a2f80e920e9805.jpg',
    capsuleImage: 'https://images.tcdn.com.br/img/img_prod/1183384/fralda_geriatrica_plus_bigfral_1615_1_e99f81cf89a0ed8de1a2f80e920e9805.jpg'
  },
  {
    id: '26',
    name: 'Sabonete de Enxofre',
    price: 9.90,
    pharmacy: 'Farmácia Pague Menos',
    description: 'Ajuda a controlar a oleosidade da pele e combater cravos e espinhas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DikJ2rrzJfeM2GFVb6JrCtF3jAJGmB0GiylwMX8k3w&s=10',
    boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DikJ2rrzJfeM2GFVb6JrCtF3jAJGmB0GiylwMX8k3w&s=10',
    capsuleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DikJ2rrzJfeM2GFVb6JrCtF3jAJGmB0GiylwMX8k3w&s=10',
    categoryId: '5'
  },
  {
    id: '27',
    name: 'Lenço Umedecido',
    price: 12.90,
    pharmacy: 'Farmácia Drogasil',
    description: 'Indicado para higiene diária, principalmente de bebês, limpando a pele com suavidade e praticidade.',
    image: 'https://product-data.raiadrogasil.io/images/3449713.webp',
    boxImage: 'https://product-data.raiadrogasil.io/images/3449713.webp',
    capsuleImage: 'https://product-data.raiadrogasil.io/images/3449713.webp',
    categoryId: '4'
  },
  {
    id: '28',
    name: 'Vitamina B12',
    price: 22.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Importante para energia, sistema nervoso e formação do sangue.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5Evre4e-KRgi-OgERVvns9XpdsBUbppP-jwfaUaO9g&s=10',
    boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5Evre4e-KRgi-OgERVvns9XpdsBUbppP-jwfaUaO9g&s=10',
    capsuleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5Evre4e-KRgi-OgERVvns9XpdsBUbppP-jwfaUaO9g&s=10',
    categoryId: '3'
  },
  {
    id: '29',
    name: 'Vitamina D3',
    price: 19.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Auxilia na saúde dos ossos e fortalece o sistema imunológico.',
    image: 'https://dmvfarma.vtexassets.com/arquivos/ids/254680/Vitamina-D3-50.000-UI-Neo-Quimica---8-Capsulas-Moles.png?v=638591829294200000',
    boxImage: 'https://dmvfarma.vtexassets.com/arquivos/ids/254680/Vitamina-D3-50.000-UI-Neo-Quimica---8-Capsulas-Moles.png?v=638591829294200000',
    capsuleImage: 'https://dmvfarma.vtexassets.com/arquivos/ids/254680/Vitamina-D3-50.000-UI-Neo-Quimica---8-Capsulas-Moles.png?v=638591829294200000',
    categoryId: '3'
  },
  {
    id: '30',
    name: 'Protetor Solar FPS 30 Nivea Sun 200ml',
    price: 58.85,
    pharmacy: 'Farmácia Popular',
    description: 'Ajuda a proteger a pele contra os raios UVA e UVB.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Zyv7mosfStKUfVi1o2F0mvg6xIBRQCj3rdyM-8Dk2g&s=10',
    boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Zyv7mosfStKUfVi1o2F0mvg6xIBRQCj3rdyM-8Dk2g&s=10',
    capsuleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Zyv7mosfStKUfVi1o2F0mvg6xIBRQCj3rdyM-8Dk2g&s=10',
    categoryId: '5'
  },
  {
    id: '31',
    name: 'Sabonete Facial Bioré 150ml',
    price: 34.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Ajuda a remover sujeira e oleosidade da pele.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrzmA5v5LZMNuGdAbIGzv2CCqIQSCfYb-4GHWFJK2fQ&s=10',
    boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrzmA5v5LZMNuGdAbIGzv2CCqIQSCfYb-4GHWFJK2fQ&s=10',
    capsuleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrzmA5v5LZMNuGdAbIGzv2CCqIQSCfYb-4GHWFJK2fQ&s=10',
    categoryId: '5'
  },
  {
    id: '32',
    name: 'Hidratante Facial Garnier 85g',
    price: 27.90,
    pharmacy: 'Farmácia Popular',
    description: 'Ajuda a hidratar a pele e controlar a oleosidade.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupXP_Fjva7bnCZjC0cKXU4ag2tZEqJhI67sti6ngSFg&s',
    boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupXP_Fjva7bnCZjC0cKXU4ag2tZEqJhI67sti6ngSFg&s',
    capsuleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupXP_Fjva7bnCZjC0cKXU4ag2tZEqJhI67sti6ngSFg&s',
    categoryId: '5'
  },
  {
    id: '33',
    name: 'NIVEA Creme 56g',
    price: 20.90,
    pharmacy: 'Farmácia Popular',
    description: 'Creme hidratante para ajudar a manter a pele macia e hidratada.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9zfk2hMAwN-y4qfDPqGaTX1MnMuOYadpVh4zSpN0dA&s=10',
    boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9zfk2hMAwN-y4qfDPqGaTX1MnMuOYadpVh4zSpN0dA&s=10',
    capsuleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9zfk2hMAwN-y4qfDPqGaTX1MnMuOYadpVh4zSpN0dA&s=10',
    categoryId: '5'
  },
  {
    id: '34',
    name: 'Bepantriz Pomada 30g',
    price: 17.90,
    pharmacy: 'Farmácia Popular',
    description: 'Ajuda na hidratação e proteção da pele.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlAzcroPJP87ljwVRuJEJK_FrwmhrPa44cEHZHTVfYw&s=10',
    boxImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlAzcroPJP87ljwVRuJEJK_FrwmhrPa44cEHZHTVfYw&s=10',
    capsuleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlAzcroPJP87ljwVRuJEJK_FrwmhrPa44cEHZHTVfYw&s=10',
    categoryId: '5'
  },
  {
    id: '35',
    name: 'Álcool 70%',
    price: 7.90,
    pharmacy: 'Farmácia Popular',
    description: 'Indicado para higienização das mãos e desinfecção de superfícies no dia a dia.',
    image: 'https://sulmaralcool.com.br/wp-content/uploads/2022/11/Sulmar-1415-1.png',
    boxImage: 'https://sulmaralcool.com.br/wp-content/uploads/2022/11/Sulmar-1415-1.png',
    capsuleImage: 'https://sulmaralcool.com.br/wp-content/uploads/2022/11/Sulmar-1415-1.png',
    categoryId: '5'
  },
  {
    id: '36',
    name: 'Soro Fisiológico',
    price: 7.90,
    pharmacy: 'Farmácia Drogasil',
    description: 'Usado para limpar a ferida antes do curativo.',
    image: 'https://cdn.dentalspeed.com/produtos/550/soro-fisiologico-0-9-100ml-farmax-FAR23195A.jpg',
    boxImage: 'https://cdn.dentalspeed.com/produtos/550/soro-fisiologico-0-9-100ml-farmax-FAR23195A.jpg',
    capsuleImage: 'https://cdn.dentalspeed.com/produtos/550/soro-fisiologico-0-9-100ml-farmax-FAR23195A.jpg',
    categoryId: '5'
  },
  {
    id: '37',
    name: 'Antisséptico para Ferimentos',
    price: 14.90,
    pharmacy: 'Farmácia Drogasil',
    description: 'Mata germes e evita infecção.',
    image: 'https://drogariasp.vteximg.com.br/arquivos/ids/615335-1000-1000/535249---antisseptico-para-ferimentos-betacare-spray-100ml.jpg?v=637854510189930000',
    boxImage: 'https://drogariasp.vteximg.com.br/arquivos/ids/615335-1000-1000/535249---antisseptico-para-ferimentos-betacare-spray-100ml.jpg?v=637854510189930000',
    capsuleImage: 'https://drogariasp.vteximg.com.br/arquivos/ids/615335-1000-1000/535249---antisseptico-para-ferimentos-betacare-spray-100ml.jpg?v=637854510189930000',
    categoryId: '5'
  },
  {
    id: '38',
    name: 'Gaze',
    price: 5.00,
    pharmacy: 'Farmácia Drogasil',
    description: 'Usado para cobrir a ferida e absorver sangue ou secreção.',
    image: 'https://farmaciasdescontao.com.br/BACKOFFICE/Uploads/Produto/Normal/7891800197518.JPG',
    boxImage: 'https://farmaciasdescontao.com.br/BACKOFFICE/Uploads/Produto/Normal/7891800197518.JPG',
    capsuleImage: 'https://farmaciasdescontao.com.br/BACKOFFICE/Uploads/Produto/Normal/7891800197518.JPG',
    categoryId: '5'
  },
  {
    id: '39',
    name: 'Esparadrapo',
    price: 7.90,
    pharmacy: 'Farmácia Popular',
    description: 'Fita usada para segurar a gaze no lugar.',
    image: 'https://images.tcdn.com.br/img/img_prod/315037/esparadrapo_5_0_x_4_5_m_und_cremer_49035_1_bd2489037a6496758646d03ed671ce58.jpg',
    boxImage: 'https://images.tcdn.com.br/img/img_prod/315037/esparadrapo_5_0_x_4_5_m_und_cremer_49035_1_bd2489037a6496758646d03ed671ce58.jpg',
    capsuleImage: 'https://images.tcdn.com.br/img/img_prod/315037/esparadrapo_5_0_x_4_5_m_und_cremer_49035_1_bd2489037a6496758646d03ed671ce58.jpg',
  
  }
];
  

export const categories = [
  { id: '1', name: 'Dor e Febre', icon: '💊', color: 'bg-red-50', iconColor: 'text-red-500', image: 'https://product-data.raiadrogasil.io/images/3541518.webp' },
  { id: '2', name: 'Gripe e Resfriado', icon: '🤧', color: 'bg-blue-50', iconColor: 'text-blue-500', image: 'https://io.convertiez.com.br/m/farmaponte/shop/products/images/18021/medium/benegrip-500mg-30mg-2mg-caixa-com-20-comprimidos-revestidos_9862.jpg' },
  { id: '3', name: 'Vitaminas', icon: '💪', color: 'bg-yellow-50', iconColor: 'text-yellow-500', image: 'https://dmvfarma.vtexassets.com/arquivos/ids/322648-800-auto?v=639052353060630000&width=800&height=auto&aspect=true' },
  { id: '4', name: 'Infantil', icon: '👶', color: 'bg-pink-50', iconColor: 'text-pink-500', image: 'https://images.ctfassets.net/dnhuh4prvxcr/5jgNaPWjJrmX7eaFiXsWx2/8456f0e0a3f548241856fdc5bce74e67/jarabe_Jarabe_infantil.Final_Color_Output.0004_840.png' },
  { id: '5', name: 'Cuidados com a Pele', icon: '🧴', color: 'bg-green-50', iconColor: 'text-green-500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DikJ2rrzJfeM2GFVb6JrCtF3jAJGmB0GiylwMX8k3w&s=10' }
];

export const pharmacies = [
  { 
    id: '1', 
    name: 'Farmácia Drogasil', 
    distance: '0.8 km', 
    rating: 4.9,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Logo_drogasil.png'
  },
  { 
    id: '2', 
    name: 'Drogaria Popular', 
    distance: '2.2 km', 
    rating: 4.5,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoeAUXaGQuxbIRlrn-unfu1xdTe2ug5Us7EQ&s'
  },
  { 
    id: '3', 
    name: 'Farmácia Pague Menos', 
    distance: '1.4 km', 
    rating: 4.75,
    logo: 'https://static.ifood-static.com.br/image/upload/t_low/logosgde/30c56f22-f626-44ea-9463-8025e2f5eb64/202505211730_NKUN.png'
  }
];