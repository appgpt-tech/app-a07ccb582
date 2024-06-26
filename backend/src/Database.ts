//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { BrandsEntity } from './db/Brands.entity';
import { WallpapersEntity } from './db/Wallpapers.entity';
import { CategoriesEntity } from './db/Categories.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      BrandsEntity,
      WallpapersEntity,
      CategoriesEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Brands: [
        {
          name: 'name 1',
          logo: 'logo 1',
          category: 1,
          foundingYear: 1,
          currentStatus: 'currentStatus 1',
          id: 45,
        },
        {
          name: 'name 2',
          logo: 'logo 2',
          category: 2,
          foundingYear: 2,
          currentStatus: 'currentStatus 2',
          id: 71,
        },
        {
          name: 'name 3',
          logo: 'logo 3',
          category: 3,
          foundingYear: 3,
          currentStatus: 'currentStatus 3',
          id: 74,
        },
        {
          name: 'name 4',
          logo: 'logo 4',
          category: 4,
          foundingYear: 4,
          currentStatus: 'currentStatus 4',
          id: 57,
        },
        {
          name: 'name 5',
          logo: 'logo 5',
          category: 5,
          foundingYear: 5,
          currentStatus: 'currentStatus 5',
          id: 88,
        },
      ],
      Wallpapers: [
        {
          image: 'image 1',
          title: 'title 1',
          description: 'description 1',
          brand: 1,
          categories: 1,
          id: 20,
        },
        {
          image: 'image 2',
          title: 'title 2',
          description: 'description 2',
          brand: 2,
          categories: 2,
          id: 84,
        },
        {
          image: 'image 3',
          title: 'title 3',
          description: 'description 3',
          brand: 3,
          categories: 3,
          id: 78,
        },
        {
          image: 'image 4',
          title: 'title 4',
          description: 'description 4',
          brand: 4,
          categories: 4,
          id: 12,
        },
        {
          image: 'image 5',
          title: 'title 5',
          description: 'description 5',
          brand: 5,
          categories: 5,
          id: 3,
        },
      ],
      Categories: [
        { name: 'name 1', id: 21 },
        { name: 'name 2', id: 28 },
        { name: 'name 3', id: 97 },
        { name: 'name 4', id: 45 },
        { name: 'name 5', id: 86 },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('BrandsEntity', data.Brands);
      await this.SeedResource('WallpapersEntity', data.Wallpapers);
      await this.SeedResource('CategoriesEntity', data.Categories);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}
