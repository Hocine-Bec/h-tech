-- H-Tech — Phase 0 seed data
-- AI-generated (tooling / quarantine zone). Safe to re-run: truncates first.
-- 20 rows, 8 categories. price_cents = DZD centimes (i.e. 1 DZD = 100).
-- Includes deliberate variety: out-of-stock, low-stock, wide price range,
-- so the list endpoint has something real to show.

TRUNCATE TABLE products RESTART IDENTITY;

INSERT INTO products (sku, name, category, price_cents, stock) VALUES
-- Monitors
('MON-DEL-2422H',  'Dell S2422HG 24" 165Hz Curved Gaming Monitor',      'monitors',      4290000, 12),
('MON-LG-27UP60',  'LG 27UP600 27" 4K UHD IPS Monitor',                  'monitors',      7850000,  4),
('MON-AOC-24B2',   'AOC 24B2XH 24" IPS Frameless Monitor',               'monitors',      2190000, 27),

-- Keyboards
('KBD-LOG-MX2S',   'Logitech MX Keys S Wireless Keyboard',               'keyboards',     2450000,  9),
('KBD-RED-K552',   'Redragon K552 Kumara Mechanical Keyboard',           'keyboards',      780000, 41),
('KBD-KEY-K2PRO',  'Keychron K2 Pro Wireless Mechanical Keyboard',       'keyboards',     1990000,  0),

-- Mice
('MSE-LOG-G502X',  'Logitech G502 X Wired Gaming Mouse',                 'mice',          1150000, 18),
('MSE-RAZ-DV3',    'Razer DeathAdder V3 Ergonomic Gaming Mouse',         'mice',          1340000,  6),

-- CPUs
('CPU-AMD-R55600', 'AMD Ryzen 5 5600 6-Core Processor (AM4)',            'cpus',          2280000, 15),
('CPU-AMD-R77800', 'AMD Ryzen 7 7800X3D 8-Core Processor (AM5)',         'cpus',          6950000,  3),
('CPU-INT-I512400','Intel Core i5-12400F 6-Core Processor (LGA1700)',    'cpus',          2050000, 22),
('CPU-INT-I714700','Intel Core i7-14700K 20-Core Processor (LGA1700)',   'cpus',          6420000,  0),

-- RAM
('RAM-COR-16D4',   'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz',    'ram',            890000, 34),
('RAM-GSK-32D5',   'G.Skill Trident Z5 32GB (2x16GB) DDR5 6000MHz',      'ram',           2470000,  7),
('RAM-KIN-8D4',    'Kingston FURY Beast 8GB DDR4 3200MHz',               'ram',            450000, 52),

-- Motherboards
('MBD-MSI-B550M',  'MSI B550M PRO-VDH WiFi Micro-ATX Motherboard',       'motherboards',  1680000, 11),
('MBD-ASU-B650',   'ASUS TUF Gaming B650-PLUS WiFi ATX Motherboard',     'motherboards',  3540000,  5),
('MBD-GIG-H610M',  'Gigabyte H610M H DDR4 Micro-ATX Motherboard',        'motherboards',   980000, 19),

-- Cases
('CSE-NZX-H5F',    'NZXT H5 Flow Mid-Tower ATX Case',                    'cases',         1720000,  8),

-- Printers
('PRN-HP-M404DN',  'HP LaserJet Pro M404dn Monochrome Printer',          'printers',      4380000,  2);